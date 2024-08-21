import PlayPause from "../PlayPause";
import React, {useState} from "react";
import {formatToHis} from "../../helper/helper";
import usePlayer from "../../store/playerStore";
import {useDraggable} from "../../hooks/useDragAndDrop";
import MicantoPlayer from "../../services/MicantoPlayer";
import {TbExplicit} from "react-icons/tb";
import Like from "../Like";
const List = ({ track, context, iteration, rowClicked, selectedRows, clearSelection, displayMenu }) => {
    const [currentTrack, isPlaying, playContext ] = usePlayer(state => [state.currentTrack, state.isPlaying, state.playContext]);
    const { startDragging } = useDraggable('tracks');
    // const onDragStart = (event) => startDragging(event, selectedRows);

    const onDragStart = (row, event) => {
        if (!row.selected) {
            clearSelection();
            row.selected = true;
            selectedRows = [row];
        }
        startDragging(event, selectedRows);
    }

    const onDblClick = (event) => {
        playContext(context, track);
    }
    const duration = formatToHis(track.duration);
    let isCurrent = currentTrack?.id === track.id;

    return(
        <div className={`${isCurrent ? 'current-playing': ''} ${track.selected ? 'selected': ''} flex w-full border-b border-sidebar group`}
             onDragStart={(e) => onDragStart(track, e)}
             onClick={(e) => rowClicked(e,track)}
             onDoubleClick={onDblClick}
             draggable="true"
             onContextMenu={(e) => displayMenu(e,track)}
        >
            <div className="flex justify-start py-2 flex-1">
                <span className="mr-2 text-right w-[25px] pl-3">
                    <div className={`${isCurrent ? 'hidden' : 'flex'} group-hover:hidden`}>
                        {track.track != 0 ? track.track : iteration +1 }
                    </div>
                    <div className={`${isCurrent ? 'flex' : 'hidden'} group-hover:flex`}>
                        <PlayPause
                            playTrack={playContext}
                            isPlaying={isPlaying}
                            track={track}
                            currentTrack={currentTrack}
                            size={20}
                            context={context}
                        />
                    </div>
                </span>
                <span className="flex items-center">
                    {track?.explicit === 1 &&
                        <div className="explicit mr-1 inline-block">
                            <TbExplicit size={16} />
                        </div>
                    }
                    {track.title}
                </span>
            </div>
            <div className="flex justify-end py-2 flex-1 mr-3">
                {duration}
                <div className="px-3 flex">
                    <Like track={track} />
                </div>
            </div>


        </div>
    );

}

export default List;
