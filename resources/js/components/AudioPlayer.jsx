import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import MicantoPlayer from "../services/MicantoPlayer";
import MediaSession from "./MusicPlayer/MediaSession";
import defaultCover from "../assets/img/logo.svg"
import Seekbar from "./MusicPlayer/Seekbar";
import Controls from "./MusicPlayer/Controls";
import usePlayer from "../store/playerStore";
import {RepeatMode} from "../assets/constants";
import {useShallow} from "zustand/react/shallow";
import ActivityIndicator from "./ActivityIndicator";
import VolumeBar from "./MusicPlayer/VolumeBar";
import ContextMenuHorizontalDots from "./ContextMenuHorizontalDots";
import AddToPlaylist from "./AddToPlaylist";
import ArtistList from "./ArtistList";
import Like from "./Like";
import SidebarToggle from "./SidebarToggle";

const AudioPlayer = () => {
    const [t] = useTranslation();
    const [track,isShuffle,repeatMode,setRepeatMode, setShuffle] = usePlayer(useShallow(state => [state.currentTrack, state.shuffle, state.repeatMode, state.setRepeatMode, state.setShuffle]));
    const onSliderChange = async (position) => {
        await MicantoPlayer.seekTo(position)
    }

    const onRepeatHandler = async () => {
        let newRepeatMode;
        console.log(repeatMode);
        switch(repeatMode) {
            case 'queue':
                newRepeatMode = 'track';
                await MicantoPlayer.setRepeatMode(RepeatMode.Track);
                break;
            case 'track':
                newRepeatMode = 'off';
                await MicantoPlayer.setRepeatMode(RepeatMode.Off);
                break;
            case 'off':
                newRepeatMode = 'queue';
                await MicantoPlayer.setRepeatMode(RepeatMode.Queue);
                break;
        }
        console.log(newRepeatMode);
        setRepeatMode(newRepeatMode);
    }

    const onPreviousTrackHandler = async () => {
        let position = parseInt(document.getElementById('seekbar').value,10);
        if (position < 3) {
            await MicantoPlayer.skipToPrevious();
        } else {
            await MicantoPlayer.seekTo(0);
        }
    }

    const onPlayHandler = async () => {
        await MicantoPlayer.play();
    }

    const onNextTrackHandler = async () => {
        await MicantoPlayer.skipToNext();
    }

    const onShuffleHandler = async () => {
        setShuffle();
    }
    const onPauseHandler = async () => {
        await MicantoPlayer.pause();
    }

    const onSeekBackwardHandler = async () => {
        await MicantoPlayer.seekBackward();
    }

    const onSeekForwardHandler = async () => {
        await MicantoPlayer.seekForward();
    }

    return (
        <MediaSession
            title={track?.title ? track?.title : 'No active Song'}
            artist={track?.artists?.map((artist, i) => {
                return artist.name
            }).join(', ')}
            album={track?.album ? track?.album: ''}
            artwork={[
                {
                    src: track?.cover ?  track?.cover : defaultCover,
                    sizes: '96x96,128x128,192x192,256x256,384x384,512x512',
                    type: 'image/jpeg',
                }
            ]}
            onPlay={onPlayHandler}
            onPause={onPauseHandler}
            onPreviousTrack={onPreviousTrackHandler}
            onNextTrack={onNextTrackHandler}
            onSeekBackward={onSeekBackwardHandler}
            onSeekForward={onSeekForwardHandler}
        >
            <div className="bottom-player">
                {!track && <ActivityIndicator />}
                {track &&
                    <div className="flex flex-col h-[81px]">

                        <div className="grid grid-cols-2 gap-8 min-h-full">
                            <div className="flex justify-around items-center">
                                <Controls
                                    repeatMode={repeatMode}
                                    shuffle={isShuffle}
                                    playHandler={onPlayHandler}
                                    pauseHandler={onPauseHandler}
                                    nextSong={onNextTrackHandler}
                                    prevSong={onPreviousTrackHandler}
                                    repeatClickHandler={onRepeatHandler}
                                    shuffleClickHandler={onShuffleHandler}
                                />

                                <Seekbar
                                    minimumValue={0}
                                    onValueChange={(event) => onSliderChange(event.target.value)}
                                />

                                <VolumeBar></VolumeBar>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <div>
                                        <img src={track?.cover ? track?.cover : defaultCover} alt="cover art"
                                             className="rounded w-[50px] h-[50px] mr-2"/>
                                    </div>
                                    <div>
                                        <p className="truncate text-white text-sm">
                                            {track?.title ? track?.title : 'No active Song'}
                                        </p>
                                        <p className="truncate text-sm text-gray-400">
                                            <ArtistList artists={track?.artists}/>
                                        </p>
                                        <p className="truncate text-sm text-gray-400">
                                            <Link to={`/album/${track?.album_id}`}>{track?.album}</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="quick-actions flex mr-4 items-center">
                                    <div className="mr-4 flex">
                                        <Like track={track}/>
                                    </div>
                                    <AddToPlaylist track={track} />

                                    <span className="mx-3 text-gray-500">|</span>

                                    <SidebarToggle />

                                    {/*<ContextMenuHorizontalDots menu="track-menu" data={[track]}/>*/}

                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </MediaSession>
    );

}

export default AudioPlayer;
