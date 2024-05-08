import { create } from 'zustand'
import MicantoPlayer from "../services/MicantoPlayer";
import {isEqual} from "lodash";
import {PlayerAPI} from "../api/PlayerAPI";
import { t } from "i18next";

function shuffleArr (array, currentTrack = null) {
    const copy = array.slice();
    let oldElement;
    let currentTrackIndex;
    if(currentTrack) {
        currentTrackIndex = copy.findIndex(music => music.id === currentTrack.id);
        if(currentTrackIndex === -1) currentTrackIndex = 0;
    } else {
        currentTrackIndex = 0;
    }

    copy.splice(currentTrackIndex, 1);
    for (let i = copy.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        oldElement = copy[i];
        copy[i] = copy[rand];
        copy[rand] = oldElement;
    }
    if(currentTrack) {
        copy.push(currentTrack);
    }
    return copy;
}

function reorderArr (i, arr) {
    return [...arr.slice(i), ...arr.slice(0,i)];
}

const usePlayer = create((set, get) => ({
    audioPlayer: new Audio(),
    currentTrack: null,
    queue: [],
    untouchedQueue: [],
    repeat: false,
    repeatMode: 'queue',
    shuffle: false,
    currentTime: 0,
    playlists: [],
    musicContext: {
        'type': null,
        'id' : null
    },
    lastPlayed: [],
    setMusicContext: (musicContext) => {
        set({
            musicContext: musicContext
        });
    },
    setQueue: (queue) => {
        const shuffle = get().shuffle;
        const currentTrack = get().currentTrack;
        let currentTrackIndex = queue.findIndex(music => music.id === currentTrack.id) +1;
        let unshuffledQueue = reorderArr(currentTrackIndex,queue);

        if(shuffle === true) {
            queue = shuffleArr(queue,currentTrack);
        } else {
            queue = unshuffledQueue;
        }

        set({
            queue: queue,
            untouchedQueue: unshuffledQueue
        })
    },
    setFromSession: async (data) => {

        if(data?.session?.track !== null) {
            let time = data.session.session?.current_time ? data.session.session?.current_time : 0;
            MicantoPlayer.load(data?.session?.track, time);
            set({
                currentTrack: data.session.track,
                currentTime: data.session.session?.current_time,
                playlists: data.playlists,
                queue: data.queue,
                untouchedQueue: data.queue,
                musicContext: JSON.parse(data.session.session?.context)
            })
        } else {
            let currentTrack = {
                title: t('sidebar.player.noSong'),
                artists: null
            }
            if(data.queue.length !== 0) {
                currentTrack = data.queue[0];
                data.queue = reorderArr(1,data.queue);
            }

            set({
                playlists: data.playlists,
                currentTrack: currentTrack,
                queue: data.queue,
                untouchedQueue: data.queue,
            })
        }
    },
    addPlaylist: (playlist) => {
        let playlists = get().playlists;
        playlists.push(playlist);
        set({
            playlists: playlists,
        })
    },
    editPlaylist: (playlist) => {
        let playlists = get().playlists;
        let index = playlists.findIndex((element) => element.id == playlist.id);
        if(index > -1) {
            playlists[index] = playlist;
            set({
                playlists: playlists,
            })
        }
    },
    deletePlaylist: (playlist) => {
        let playlists = get().playlists;
        let index = playlists.findIndex((element) => element.id == playlist.id);
        if(index > -1) {
            playlists.splice(index, 1);
            set({
                playlists: playlists,
            })
        }
    },

    playContext: async (context, track, shuffled) => {
        set({
            currentTrack: null
        });

        let currentContext = get().musicContext;
        let shuffle = get().shuffle;
        let currentQueue = get().queue;
        let currentTrack;
        if(context.hasOwnProperty('type')) {
            if(context.type !== 'queue' && !isEqual(currentContext, context)) {
                const {data: queue} = await PlayerAPI.getQueue(context);
                currentQueue = queue;
            }
        }

        if(track) {
            let currentTrackIndex = currentQueue.findIndex(music => music.id === track.id) +1;
            currentQueue = reorderArr(currentTrackIndex,currentQueue);
            currentTrack = track;
        }

        if(shuffled != shuffle) {
            shuffle = shuffled;
        }

        if(shuffle === true) {
            currentQueue = shuffleArr(currentQueue,track ? track : null);
        }

        if(!track) {
            currentTrack = currentQueue[0];
        }

        set({
            currentTrack: currentTrack,
            currentTime: 0,
            queue: currentQueue,
            untouchedQueue: currentQueue,
            shuffle: shuffle
        });

        await MicantoPlayer.load(currentTrack);
        MicantoPlayer.play();

    },
    playQueue: (queue) => {
        set({
            currentTrack: queue[0],
            currentTime: 0,
            queue: queue,
            untouchedQueue: queue
        })
    },
    setCurrentTime: (time) => set(() => ({ currentTime: time })),
    setRepeatMode: (repeatType) => set(() => ({ repeatType: repeatType })),
    setShuffle: (shuffleState) => {
        let newState;
        if(shuffleState) {
            newState = shuffleState;
        } else {
            newState = !get().shuffle;
        }
        const currentTrack = get().currentTrack;
        let queue = get().queue;
        if(newState === true) {
            queue = shuffleArr(queue, currentTrack);
        } else {
            queue = get().untouchedQueue;
        }
        set((state) => ({ shuffle: newState, queue:queue }));
    },
    changeMusic: (type, auto) => {
        const repeatType = get().repeatType;
        const currentMusic = get().currentTrack;
        if ( type === "next" && auto && repeatType === "off" ) {
            set(() => ({ isPlaying: false }))
            return;
        }
        let nextTrack;

        if ( type === "next" && auto && repeatType === "once" ) {
            nextTrack = currentMusic;
            set(() => ({ isPlaying: false }))
            setTimeout(() => {
                set(() => ({ isPlaying: true }))
            }, 300);
        }

        const playList = get().queue;
        const playlistLength = playList.length;
        let queue = playList;
        let untouchedQueue = get().untouchedQueue;
        let currentMusicIndex = playList.findIndex(music => music.id === currentMusic.id)
        if ( repeatType === "all" ) {
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

        set(() => ({
            currentTrack: nextTrack,
            currentTime: 0,
            queue: queue,
            untouchedQueue: untouchedQueue
        }))
    },
}));

export default usePlayer;
