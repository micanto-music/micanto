import {EventEmitter} from "./EventEmitter";
import {Event, RepeatMode, State} from "../assets/constants";
import usePlayer from "../store/playerStore";
import {PlayerAPI} from "../api/PlayerAPI";
import {reorderArr, seekUpdate} from "../helper/helper";
import {SetupNotCalledError} from "../../../../react-web-player/SetupNotCalledError";
class MicantoPlayer {

    hasInitialized = false;
    element;
    currentIndex;
    repeatMode = 'Queue';
    state= { state: State.None };
    playWhenReady = false;

    async setupPlayer() {
        if (typeof window === 'undefined') return;
        // throw error
        if (this.hasInitialized === true) {
        }

        this.element = document.createElement('audio');
        this.element.setAttribute('id', 'micanto-web-track-player');
        this.element.volume = 0.3;
        this.element.addEventListener('ended', this.onStateUpdate.bind(this, State.Ended));
        this.element.addEventListener('playing', this.onStateUpdate.bind(this, State.Playing));
        this.element.addEventListener('pause', this.onStateUpdate.bind(this, State.Paused));

        this.setupProgressUpdates(1);

        this.hasInitialized = true;
    }

    async onStateUpdate(state) {
        this.state = { state };
        EventEmitter.dispatch(Event.PlaybackState, state);

        if (state === State.Ended) {
            await this.onTrackEnded();
        }
    }

    async onTrackEnded(){
        this.changeMusic('next',true);
    }

    onQueueEnded() {}

    async getPlayWhenReady() {
        return this.playWhenReady;
    }

    async getPlaybackState() {
        return this.state;
    }

    /* Player Actions */

    async load(track, initialTime = 0) {
        this.element.src = track.url;
        this.current = track;
        this.element.currentTime = initialTime;
    }

    play() {
        this.setPlayWhenReady(true);
        return this.element.play()
            .catch(err => {
                console.error(err);
            });
    }

    pause() {
        this.setPlayWhenReady(false);
        return this.element.pause();
    }

    seekTo(seconds) {
        this.element.currentTime = seconds;
    }

    async seekBackward() {
        if (this.element) {
            this.element.currentTime -= 10;
        }
    }

    async seekForward() {
        if (this.element) {
            this.element.currentTime += 10;
        }
    }

    skipToNext(){
        this.changeMusic('next',false);
    }

    skipToPrevious(){
        this.changeMusic('prev',false);
    }

    async changeMusic(type, auto) {
        const repeatMode = usePlayer.getState().repeatMode;
        const currentMusic = usePlayer.getState().currentTrack;
        if ( type === "next" && auto && repeatMode === "off" ) {
            return;
        }
        let nextTrack;

        if ( type === "next" && auto && repeatMode === RepeatMode.Track ) {
            nextTrack = currentMusic;
        }

        const playList = usePlayer.getState().queue;
        const playlistLength = playList.length;
        let queue = playList;
        let untouchedQueue = usePlayer.getState().untouchedQueue;
        let currentMusicIndex = playList.findIndex(music => music.id === currentMusic.id)
        if ( repeatMode === "queue" ) {
            if ( type === "next" ) {
                if ( currentMusicIndex + 1 === playlistLength ) {
                    currentMusicIndex = -1
                }
                currentMusicIndex += 1
            }
            if ( type === "prev" ) {
                if ( currentMusicIndex === 0 ) {
                    currentMusicIndex = playlistLength
                }
                currentMusicIndex -= 1
            }

            nextTrack = playList[currentMusicIndex];
            queue = reorderArr(currentMusicIndex +1 , queue);
            untouchedQueue = reorderArr(currentMusicIndex +1, untouchedQueue);
        }
        usePlayer.setState({
            currentTrack: nextTrack,
            currentTime: 0,
            queue: queue,
            untouchedQueue: untouchedQueue
        })

        await this.load(nextTrack);
        if (this.playWhenReady) {
            this.play();
        }
    }

    setPlayWhenReady(pwr) {
        const didChange = pwr !== this.playWhenReady;
        this.playWhenReady = pwr;
        if (didChange) {
            EventEmitter.dispatch(Event.PlaybackPlayWhenReadyChanged, { playWhenReady: this.playWhenReady });
        }
    }

    setRepeatMode( repeatMode ) {
        this.repeatMode = repeatMode;
    }

    getProgress() {
        // if (!this.element) throw new SetupNotCalledError();
        return {
            position: this.element.currentTime,
            duration: this.element.duration || 0,
            buffered: 0,
        }
    }

    setVolume(volume) {
        this.element.volume = volume;
    }

    setupProgressUpdates(interval) {
        // clear and reset interval
        this.clearUpdateEventInterval();
        if (interval) {
            this.clearUpdateEventInterval();
            this.progressUpdateEventInterval = setInterval(async () => {
                if (this.state.state === State.Playing) {
                    const progress = await this.getProgress();

                    // track play updates
                    this.trackUpdates(progress.position, progress.duration);

                    EventEmitter.dispatch(
                        Event.PlaybackProgressUpdated, {
                            ...progress,
                            track: this.currentIndex,
                        }
                    );
                }
            }, interval * 1000);
        }
    }
    clearUpdateEventInterval() {
        if (this.progressUpdateEventInterval) {
            clearInterval(this.progressUpdateEventInterval);
        }
    }

    trackUpdates(position, duration) {

        let curTime = Math.ceil(position);
        const activeTrack = usePlayer.getState().currentTrack;
        const context = usePlayer.getState().musicContext;
        let lastPlayed = usePlayer.getState().lastPlayed;

        // // if we listened over 33% of the track, we say it is played
        if(activeTrack && lastPlayed.indexOf(activeTrack.id) === -1) {

            if (!isNaN(duration) && duration / 3 <= curTime) {
                PlayerAPI.setPlayed(activeTrack.id);
                lastPlayed.push(activeTrack.id);

                if(lastPlayed.length === 10) {
                    lastPlayed.shift();
                }
                usePlayer.setState({lastPlayed: lastPlayed})
            }
        }

        if (curTime % 5 === 0 || curTime === 0) {
            PlayerAPI.updateSession(curTime, activeTrack.id, context);
        }
    }
}

const module = new MicantoPlayer();
export default module;
