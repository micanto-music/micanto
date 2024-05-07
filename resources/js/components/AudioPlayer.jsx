import React from "react";
import {useTranslation} from "react-i18next";
import Queue from "./Queue";
import MicantoPlayer from "../services/MicantoPlayer";
import MediaSession from "./MusicPlayer/MediaSession";
import defaultCover from "../assets/img/logo.svg"
import Seekbar from "./MusicPlayer/Seekbar";
import Controls from "./MusicPlayer/Controls";
import usePlayer from "../store/playerStore";
import {RepeatMode} from "../assets/constants";
import {useShallow} from "zustand/react/shallow";
import ActivityIndicator from "./ActivityIndicator";
const AudioPlayer = () => {
    const [t] = useTranslation();
    const [track,isShuffle,repeatMode,setRepeatMode, setShuffle] = usePlayer(useShallow(state => [state.currentTrack, state.shuffle, state.repeatMode, state.setRepeatMode, state.setShuffle]));

    const onSliderChange = async (position) => {
        await MicantoPlayer.seekTo(position)
    }

    const onRepeatHandler = async () => {
        let newRepeatMode;
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
            <div className="md:flex hidden sidebar w-[320px] border-l">
                {!track && <ActivityIndicator />}
                {track &&
                    <>
                    <div>
                        <h2 className="mt-2">{t('sidebar.player.headline')}</h2>

                        <div className="mt-10 mb-5 flex justify-center">
                            <img src={track?.cover ? track?.cover : defaultCover} alt="cover art"
                                 className="rounded-lg w-[180px]"/>
                        </div>
                        <div className="">
                            <p className="truncate text-white font-bold text-lg text-center">
                                {track?.title ? track?.title : 'No active Song'}
                            </p>
                            <p className="truncate text-gray-300 text-center">

                                {track?.artists?.map((artist, i) => [
                                    i > 0 && ", ",
                                    <span key={`artist${artist.id}`}> {artist.name}</span>
                                ])}

                                {track?.artists?.length == 0 &&
                                    'Unknown Artist'
                                }
                            </p>
                        </div>

                        <Seekbar
                            minimumValue={0}
                            onValueChange={(event) => onSliderChange(event.target.value)}
                        />

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
                    </div>
                    <Queue/>
                    </>
                }
            </div>
        </MediaSession>
    );

}

export default AudioPlayer;
