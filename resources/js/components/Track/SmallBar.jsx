import defaultCover from "../../assets/img/logo.svg";
import React from "react";
import ArtistList from "../ArtistList";
import {formatToHis} from "../../helper/helper";
import usePlayer from "../../store/playerStore";
import {useDraggable} from "../../hooks/useDragAndDrop";
import MicantoPlayer from "../../services/MicantoPlayer";
const SmallBar = ({ track, context }) => {
    const [musicContext, playContext] = usePlayer(state => [state.musicContext, state.playContext]);
    const { startDragging } = useDraggable('tracks');
    let useContext = musicContext;

    if(context) {
        useContext = context;
    }

    return (
        <li className="smallbar flex items-center"
            onClick={() => playContext(useContext, track)}
            onDragStart={(e) => startDragging(e, track)}
            draggable
        >
            <div className="cover basis-12">
                <img
                    src={track?.cover ?  track?.cover : defaultCover}
                    alt={track?.title}
                />
            </div>
            <div className="track-artists">
                <div className="track-title">
                    {track.title}
                </div>
                <div className="artists">
                    <ArtistList artists={track?.artists} />
                </div>
            </div>
            <div className="text-sm text-gray-300 justify-end">
                {formatToHis(track.duration)}
            </div>
        </li>
    )

}

export default SmallBar;
