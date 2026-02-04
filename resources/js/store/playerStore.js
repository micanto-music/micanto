import { create } from 'zustand'
import MicantoPlayer from "../services/MicantoPlayer";
import {isEqual, shuffle as lodashShuffle} from "lodash";
import {PlayerAPI} from "../api/PlayerAPI";
import { t } from "i18next";
import {reorderArr} from "../helper/helper";
import {RepeatMode} from "../assets/constants";

function shuffleQueue (array, currentTrackId = null) {
    let copy = [...array];
    if (currentTrackId) {
        copy = copy.filter(track => track.id !== currentTrackId);
    }
    const shuffled = lodashShuffle(copy);
    if (currentTrackId) {
        const currentTrack = array.find(t => t.id === currentTrackId);
        if (currentTrack) shuffled.unshift(currentTrack);
    }
    return shuffled;
}

const usePlayer = create((set, get) => ({
    currentTrack: null,
    queue: [],
    untouchedQueue: [],
    repeatMode: RepeatMode.Queue,
    shuffle: false,
    currentTime: 0,
    isPlaying: false,
    playlists: [],
    musicContext: {
        'type': null,
        'id' : null
    },
    lastPlayed: [],

    setMusicContext: (musicContext) => set({ musicContext }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentTime: (time) => set({ currentTime: time }),
    setRepeatMode: (repeatMode) => set({ repeatMode }),

    setQueue: (queue) => {
        const { shuffle, currentTrack } = get();
        let displayQueue = [...queue];

        if (shuffle) {
            displayQueue = shuffleQueue(queue, currentTrack?.id);
        }

        set({
            queue: displayQueue,
            untouchedQueue: [...queue]
        });
    },

    setFromSession: async (data) => {
        if (data?.session?.track) {
            const time = data.session.session?.current_time || 0;
            const context = JSON.parse(data.session.session?.context || '{}');

            set({
                currentTrack: data.session.track,
                currentTime: time,
                playlists: data.playlists,
                queue: data.queue,
                untouchedQueue: data.queue, // Assuming data.queue from session is already what we want
                musicContext: context,
                shuffle: context?.options?.shuffle === true
            });

            await MicantoPlayer.load(data.session.track, time);
        } else {
            const defaultTrack = data.queue.length > 0
                ? data.queue[0]
                : { title: t('sidebar.player.noSong'), artists: null };

            const queue = data.queue.length > 0 ? reorderArr(1, data.queue) : [];

            set({
                playlists: data.playlists,
                currentTrack: defaultTrack,
                queue: queue,
                untouchedQueue: data.queue,
            });
        }
    },

    playContext: async (context, track = null, forceShuffle = null) => {
        let { shuffle, queue: currentQueue, musicContext: currentContext } = get();

        if (forceShuffle !== null) shuffle = forceShuffle;

        // Fetch new queue if context changed
        if (context && context.type !== 'queue' && !isEqual(currentContext, context)) {
            const { data } = await PlayerAPI.getQueue(context);
            currentQueue = data;
            currentContext = context;
        }

        let newUntouched = [...currentQueue];
        let nextTrack = track || currentQueue[0];
        let newQueue = [...currentQueue];

        if (shuffle) {
            newQueue = shuffleQueue(newUntouched, nextTrack?.id);
        } else if (track) {
            const trackIndex = newUntouched.findIndex(t => t.id === track.id);
            newQueue = reorderArr(trackIndex + 1, newUntouched);
        } else {
            newQueue = reorderArr(1, newUntouched);
        }

        set({
            currentTrack: nextTrack,
            currentTime: 0,
            queue: newQueue,
            untouchedQueue: newUntouched,
            shuffle,
            musicContext: currentContext,
            isPlaying: true
        });

        await MicantoPlayer.load(nextTrack);
        await MicantoPlayer.play();
    },

    next: async (auto = false) => {
        const { repeatMode, currentTrack, queue, untouchedQueue, shuffle } = get();

        if (auto && repeatMode === RepeatMode.Off && queue.length === 0) {
            set({ isPlaying: false });
            return;
        }

        if (auto && repeatMode === RepeatMode.Track && currentTrack) {
            await MicantoPlayer.seekTo(0);
            await MicantoPlayer.play();
            return;
        }

        if (queue.length === 0 && repeatMode !== RepeatMode.Queue) {
            set({ isPlaying: false });
            return;
        }

        // If queue is empty but repeat is on, we take from untouched
        let workQueue = queue.length > 0 ? [...queue] : [...untouchedQueue];
        const nextTrack = workQueue[0];
        const remainingQueue = reorderArr(1, workQueue);

        set({
            currentTrack: nextTrack,
            currentTime: 0,
            queue: remainingQueue,
        });

        if (nextTrack) {
            await MicantoPlayer.load(nextTrack);
            await MicantoPlayer.play();
        }
    },

    prev: async () => {
        const { currentTrack, untouchedQueue, shuffle } = get();
        if (!currentTrack) return;

        // Simple prev logic: find current in untouched and take previous
        const currentIndex = untouchedQueue.findIndex(t => t.id === currentTrack.id);
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = untouchedQueue.length - 1;

        const prevTrack = untouchedQueue[prevIndex];
        // Rebuild queue from prevTrack
        const newQueue = reorderArr(prevIndex + 1, untouchedQueue);

        set({
            currentTrack: prevTrack,
            currentTime: 0,
            queue: newQueue
        });

        await MicantoPlayer.load(prevTrack);
        await MicantoPlayer.play();
    },

    setShuffle: (state = null) => {
        const { shuffle: currentShuffle, currentTrack, untouchedQueue, musicContext } = get();
        const newState = state !== null ? state : !currentShuffle;

        let newQueue;
        if (newState) {
            newQueue = shuffleQueue(untouchedQueue, currentTrack?.id);
        } else {
            const currentIndex = untouchedQueue.findIndex(t => t.id === currentTrack?.id);
            newQueue = reorderArr(currentIndex + 1, untouchedQueue);
        }

        const newContext = { ...musicContext, options: { ...musicContext.options, shuffle: newState } };

        set({
            shuffle: newState,
            queue: newQueue,
            musicContext: newContext
        });
    },

    // Playlist management
    addPlaylist: (playlist) => set(state => ({ playlists: [...state.playlists, playlist] })),
    editPlaylist: (playlist) => set(state => ({
        playlists: state.playlists.map(p => p.id === playlist.id ? playlist : p)
    })),
    deletePlaylist: (playlist) => set(state => ({
        playlists: state.playlists.filter(p => p.id !== playlist.id)
    })),
}));

export default usePlayer;
