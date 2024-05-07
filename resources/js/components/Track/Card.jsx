import React from 'react';
import usePlayer from "../../store/playerStore";
import ArtistList from "../ArtistList";
import defaultCover from "../../assets/img/logo.svg";
import {BaseCard} from "../BaseCard";
import {useDraggable} from "../../hooks/useDragAndDrop";
const Card = ({ track, width = 250 }) => {
    const [musicContext, playContext] = usePlayer(state => [state.musicContext, state.playContext]);
    const { startDragging } = useDraggable('tracks');
    return (
        <BaseCard width={width}>
            <div
                onDragStart={(e) => startDragging(e, track)}
                draggable="true"
            >
                <div onClick={() => playContext(musicContext, track)}>
                    <img
                        src={track?.cover ? track?.cover : defaultCover}
                        alt={track?.title}
                        className="w-full h-full rounded-lg"
                    />
                </div>

                <div className="mt-4 flex flex-col">
                    <p className="font-semibold text-lg text-white truncate">
                        <div onClick={() => playContext(musicContext, track)}>
                            {track.title}
                        </div>
                    </p>
                    <p className="text-sm truncate text-gray-300 mt-1">
                        <ArtistList artists={track?.artists}/>
                    </p>
                </div>
            </div>
        </BaseCard>
    );
};

export default Card;
