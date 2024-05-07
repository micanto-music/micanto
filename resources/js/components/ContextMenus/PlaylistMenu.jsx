import {Item, Menu, Separator, Submenu} from "react-contexify";
import React from "react";
import {useTranslation} from "react-i18next";
import {useModal} from "../../hooks/useModal";
import usePlayer from "../../store/playerStore";
import {PlayerAPI} from "../../api/PlayerAPI";

export default function PlaylistMenu({id}) {
    const [t] = useTranslation();
    const { onOpen: openEditPlaylist } = useModal('Playlist-Edit');
    const { onOpen: openDeletePlaylist } = useModal('Playlist-Delete');
    const [playContext] = usePlayer(state => [state.playContext]);

    const playAll = (id, shuffle = false) => {
        const context = {
            'type': 'playlist',
            'id': id,
        }
        playContext(context, null, shuffle);
    };

    const handleItemClick = ({ id, event, props }) => {
        switch (id) {
            case "play":
                playAll(props.id);
                break;
            case "shuffle":
                playAll(props.id, true);
                break;
            case "edit":
                openEditPlaylist(event,props);
                break;
            case "delete":
                openDeletePlaylist(event,props);
                break;
            default:
                break;
        }
    }



    return(
        <Menu id={id}>
            <Item id="play" onClick={handleItemClick}>{t('context.play')}</Item>
            <Item id="shuffle" onClick={handleItemClick}>{t('context.shuffle')}</Item>
            <Item id="edit" onClick={handleItemClick}>{t('context.edit')}</Item>
            <Separator />
            <Item id="delete" onClick={handleItemClick}>{t('context.delete')}</Item>
        </Menu>
    );

}
