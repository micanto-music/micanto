/* Drag&Drop Item Types */
import {HiMusicNote, HiOutlineHome, HiOutlineSearch, HiOutlineUserGroup} from "react-icons/hi";
import {BsDisc} from "react-icons/bs";
import {LuLayoutList, LuHeart} from "react-icons/lu";

export const DragItemTypes = {
    TRACK: 'track',
    ALBUM: 'album',
    ARTIST: 'artist'
}

export const links = [
    { name: 'search', to: '/search', icon: HiOutlineSearch },
    { name: 'start', to: '/home', icon: HiOutlineHome },
    { name: 'tracks', to: '/tracks', icon: HiMusicNote },
    { name: 'artists', to: '/artists', icon: HiOutlineUserGroup },
    { name: 'albums', to: '/albums', icon: BsDisc },
    { name: 'queue', to: '/queue', icon: LuLayoutList },
    { name: 'favorites', to: '/favorites', icon: LuHeart },
];

export const VALID_IMAGE_TYPES = ['image/jpeg', 'image/gif', 'image/png', 'image/webp']

export const RepeatMode = {
    Off: 'off',
    Track: 'track',
    Queue: 'queue'
}

export const Event = {
    PlaybackState: 'playback-state',
    PlaybackActiveTrackChanged: 'playback-active-track-changed',
    PlaybackPlayWhenReadyChanged: 'playback-play-when-ready-changed',
    PlaybackProgressUpdated: 'playback-progress-updated'
}


export const State = {
    None : "none",
    /** Indicates that the player is paused, but ready to start playing */
    Ready: "ready",
    Playing: "playing",
    /** Indicates that the player is currently paused */
    Paused: "paused",
    /** Indicates that the player is currently stopped */
    Stopped: "stopped",
    /** Indicates that the initial load of the item is occurring. */
    Loading: "loading",
    /**
     * @deprecated Use `State.Loading` instead.
     **/
    Connecting: "loading",
    /**
     * Indicates that the player is currently loading more data before it can
     * continue playing or is ready to start playing.
     */
    Buffering: "buffering",
    /**
     * Indicates that playback of the current item failed. Call `TrackPlayer.getError()`
     * to get more information on the type of error that occurred.
     * Call `TrackPlayer.retry()` or `TrackPlayer.play()` to try to play the item
     * again.
     */
    Error: "error",
    /**
     * Indicates that playback stopped due to the end of the queue being reached.
     */
    Ended: "ended"
}
