import {EventEmitter} from "./EventEmitter";
import {Event, State} from "../assets/constants";
import usePlayer from "../store/playerStore";
import {PlayerAPI} from "../api/PlayerAPI";

class MicantoPlayer {

    hasInitialized = false;
    element;
    state = { state: State.None };
    playWhenReady = false;

    async setupPlayer() {
        if (typeof window === 'undefined' || this.hasInitialized) return;

        this.element = document.createElement('audio');
        this.element.setAttribute('id', 'micanto-web-track-player');
        this.element.volume = 0.3;
        
        // Listeners
        this.element.addEventListener('ended', () => this.onStateUpdate(State.Ended));
        this.element.addEventListener('playing', () => this.onStateUpdate(State.Playing));
        this.element.addEventListener('pause', () => this.onStateUpdate(State.Paused));
        this.element.addEventListener('error', (e) => {
            console.error("Audio Element Error:", e);
            this.onStateUpdate(State.Error);
        });

        this.setupProgressUpdates(1);
        this.hasInitialized = true;
    }

    async getPlaybackState() {
        return this.state;
    }

    async getPlayWhenReady() {
        return this.playWhenReady;
    }

    /* Player Actions */

    async load(track, initialTime = 0) {
        if (!this.element) await this.setupPlayer();
        if (!track?.url) return;

        this.element.src = track.url;
        this.element.currentTime = initialTime;
    }

    async play() {
        this.setPlayWhenReady(true);
        try {
            await this.element.play();
        } catch (err) {
            console.error("Playback failed:", err);
            // Often due to Autoplay policies
            this.onStateUpdate(State.Paused);
        }
    }

    pause() {
        this.setPlayWhenReady(false);
        this.element.pause();
    }

    seekTo(seconds) {
        if (this.element) {
            this.element.currentTime = seconds;
        }
    }

    async seekBackward() {
        if (this.element) {
            this.element.currentTime = Math.max(0, this.element.currentTime - 10);
        }
    }

    async seekForward() {
        if (this.element) {
            this.element.currentTime = Math.min(this.element.duration, this.element.currentTime + 10);
        }
    }

    skipToNext() {
        usePlayer.getState().next(false);
    }

    skipToPrevious() {
        usePlayer.getState().prev();
    }

    setPlayWhenReady(pwr) {
        const didChange = pwr !== this.playWhenReady;
        this.playWhenReady = pwr;
        if (didChange) {
            EventEmitter.dispatch(Event.PlaybackPlayWhenReadyChanged, { playWhenReady: this.playWhenReady });
            // Immediate update for UI
            usePlayer.getState().setIsPlaying(pwr);
        }
    }

    getProgress() {
        return {
            position: this.element?.currentTime || 0,
            duration: this.element?.duration || 0,
            buffered: 0,
        }
    }

    setVolume(volume) {
        if (this.element) this.element.volume = volume;
    }

    setupProgressUpdates(intervalSeconds) {
        this.clearUpdateEventInterval();
        this.progressUpdateEventInterval = setInterval(async () => {
            if (this.state.state === State.Playing) {
                const progress = this.getProgress();
                this.trackUpdates(progress.position, progress.duration);

                EventEmitter.dispatch(Event.PlaybackProgressUpdated, progress);
                
                // Also update store time for UI components that don't use events
                usePlayer.getState().setCurrentTime(progress.position);
            }
        }, intervalSeconds * 1000);
    }

    clearUpdateEventInterval() {
        if (this.progressUpdateEventInterval) {
            clearInterval(this.progressUpdateEventInterval);
        }
    }

    trackUpdates(position, duration) {
        const curTime = Math.ceil(position);
        const { currentTrack, musicContext, lastPlayed } = usePlayer.getState();

        if (!currentTrack) return;

        // Mark as played if 33% reached
        if (!lastPlayed.includes(currentTrack.id)) {
            if (!isNaN(duration) && duration > 0 && (duration / 3) <= curTime) {
                PlayerAPI.setPlayed(currentTrack.id);
                const newLastPlayed = [...lastPlayed, currentTrack.id].slice(-10);
                usePlayer.setState({ lastPlayed: newLastPlayed });
            }
        }

        // Sync session with server every 5 seconds
        if (curTime % 5 === 0 || curTime === 0) {
            PlayerAPI.updateSession(curTime, currentTrack.id, musicContext);
        }
    }
}

const instance = new MicantoPlayer();
export default instance;
