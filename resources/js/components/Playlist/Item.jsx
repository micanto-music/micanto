import {NavLink} from "react-router-dom";
import React, {useRef,useState} from "react";
import {useDroppable} from "../../hooks/useDragAndDrop";
import {PlayerAPI} from "../../api/PlayerAPI";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsMusicNoteList } from "react-icons/bs";
import {useTranslation} from "react-i18next";
import usePlayer from "../../store/playerStore";

export default function Item({playlist, displayMenu}) {
    const { acceptsDrop,getDroppedData,getDragType } = useDroppable(['tracks', 'album', 'artist']);
    const [droppable, setDroppable] = useState(false);
    const [setShuffle, playContext] = usePlayer(state => [state.setShuffle, state.playContext]);
    const [t] = useTranslation();
    const notify = (text, type) => toast(text, {type:'success'});
    const onDragOver = (event) => {
        if (!acceptsDrop(event)) return false;
        event.preventDefault();
        setDroppable(true);
        return false
    }

    const onDragLeave = () => (setDroppable(false));

    const onDrop = async (event) => {
        setDroppable(false)
        if (!acceptsDrop(event)) return false;
        let type = getDragType(event);
        let ids = getDroppedData(event);
        PlayerAPI.addPlaylistItems(
            playlist.id,
            type,
            ids
        ).then((res) => {
            notify(t('toast.'+type+'_added_to_playlist'));
        });

        return false;
    }

    let context = {
        type: 'playlist',
        id: playlist.id,
        options: {
            index: 0,
            sortField: 'tracks.title',
            order: 'asc'
        }
    }

    const onDblClick = async () => {
        await setShuffle(true);
        context['options']['shuffle'] = true;
        await playContext(context,null, true);
    }

    return(
        <div
            onDoubleClick={onDblClick}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            className={droppable ? `droppable`: ``}
        >
            <NavLink title={playlist.name} onContextMenu={(e) => displayMenu(e, playlist)} className="flex flex-row hover:text-cyan-400" key={`playlist${playlist.id}`} to={`/playlist/${playlist.id}`}>
                <span className="nav-icon"><BsMusicNoteList size={20}/></span>
                <span className="p-2 truncate">{playlist.name}</span>
            </NavLink>
        </div>
    );

}
