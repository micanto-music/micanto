/* eslint-disable no-nested-ternary */
import React from 'react';
import ArtistList from "../ArtistList";
import PlayPause from '../PlayPause';
import defaultCover from "../../assets/img/logo.svg";
import usePlayer from "../../store/playerStore";
import {useDraggable} from "../../hooks/useDragAndDrop";
import ContextMenuHorizontalDots from "../ContextMenuHorizontalDots";
import Like from "../Like";
const Bar = ({ track, context, displayMenu }) => {
    const [currentTrack, isPlaying, playContext ] = usePlayer(state => [state.currentTrack, state.isPlaying, state.playContext]);
    const { startDragging } = useDraggable('tracks');

    return (
    <div className="track-bar"
         onClick={ () => playContext(context, track) }
         onContextMenu={(e) => displayMenu(e,track)}
         onDragStart={(e) => startDragging(e, track)}
         draggable
    >
        <div className="flex-1 flex flex-row justify-between items-center">
            <div className="relative">
                <img
                    className="w-[70px] rounded-lg"
                    src={track?.cover ? track?.cover : defaultCover}
                    alt={track?.title}
                />
                <div className="playhover">
                    <PlayPause
                        track={track}
                        size={30}
                        currentTrack={currentTrack}
                        isPlaying={isPlaying}
                    />
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center mx-3">
                <p>
                    {track.title}
                </p>
                <p className="text-sm truncate text-gray-300 mt-1">
                    <ArtistList artists={track?.artists}/>
                </p>
            </div>

        </div>
        <Like track={track}/>
        <ContextMenuHorizontalDots menu="track-menu" data={[track]}/>
    </div>
    );
};

export default Bar;
