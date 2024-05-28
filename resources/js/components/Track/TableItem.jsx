import defaultCover from "../../assets/img/logo.svg";
import React, {useRef} from "react";
import ArtistList from "../ArtistList";
import {Link} from "react-router-dom";
import {formatToHis} from "../../helper/helper";
import PlayPause from "../PlayPause";
import usePlayer from "../../store/playerStore";
import dayjs from 'dayjs';
import {useDraggable} from "../../hooks/useDragAndDrop";
import {useModal} from "../../hooks/useModal";
import {useShallow} from "zustand/react/shallow";
import {TbExplicit} from "react-icons/tb";
import {PlayerAPI} from "../../api/PlayerAPI";

const TableItem = ({ index, track, cols, context, rowClicked, selectedRows, clearSelection, setSelectedRows, displayMenu })  => {
    const [currentTrack, playContext] = usePlayer(useShallow(state => [state.currentTrack, state.playContext]));
    const { startDragging } = useDraggable('tracks');
    const { onOpen: openEditTrack } = useModal('Track-Edit');
    const isPlaying = false;
    const onDragStart = (row, event) => {
        if (!row.selected) {
            clearSelection();
            row.selected = true;
            selectedRows = [row];
        }
        startDragging(event, selectedRows);
    }

    const onDblClick = async () => {
        if(index) {
            context.options.index = index;
        }
        await playContext(context, track);
    }

    return(
        <>
            <button className="ml-2" onClick={() => {
                PlayerAPI.download(track.id);
            }}>DL
            </button>

    <div className={`tableitem flex group ${track.selected ? 'selected' : ''}`} key={track.id}
         onDragStart={(e) => onDragStart(track, e)}
             onClick={(e) => rowClicked(e, track)}
             onDoubleClick={onDblClick}
             draggable="true"
             onContextMenu={(e) => displayMenu(e,track)}
        >
            <div className="basis-16 p-2">
                <div className={`${currentTrack?.id === track.id ? 'hidden' : 'flex'} group-hover:hidden`}>
                    {track.track}
                </div>
                <div className={`${currentTrack?.id === track.id ? 'flex' : 'hidden'} group-hover:flex`}>
                    <PlayPause
                        track={track}
                        size={20}
                        context={context}
                        currentTrack={currentTrack}
                        playTrack={playContext}
                        isPlaying={isPlaying}
                    />
                </div>
            </div>
            <div className="flex flex-1 py-2 min-w-0">
                <div className="cover">
                    <img width="50px"
                         src={track?.cover ? track?.cover : defaultCover}
                         alt={track?.album}
                         className=""/>
                </div>

                <div className="track-artists">
                    <div className="track-title">
                        {track.title}
                    </div>
                    <div className="artists flex items-center">
                        {track?.explicit === 1 &&
                            <div className="explicit mr-1 inline-block">
                                <TbExplicit size={16} />
                            </div>
                        }
                        <ArtistList artists={track?.artists}/>



                    </div>
                </div>

            </div>
            <div className="basis-2/6 py-2">
                <Link className="album-link" to={`/album/${track?.album_id}`}>
                    {track?.album}
                </Link>
            </div>
            <div className="basis-24 py-2">
                {formatToHis(track?.duration)}
            </div>

            {cols[4]?.accessor === 'playlist_track.created_at' &&
                <div className="basis-24 py-2">
                    {dayjs(track?.added_at).format('DD.MM.YYYY')}
                </div>
            }
        </div>
        </>
    );
}

export default TableItem
