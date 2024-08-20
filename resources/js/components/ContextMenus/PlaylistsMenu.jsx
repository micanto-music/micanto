import {Item, Menu, Separator, Submenu} from "react-contexify";
import React from "react";
import {useTranslation} from "react-i18next";
import {useModal} from "../../hooks/useModal";
import usePlayer from "../../store/playerStore";
import {PlayerAPI} from "../../api/PlayerAPI";
import {useShallow} from "zustand/react/shallow";
import {toast} from "react-toastify";

export default function PlaylistsMenu({id}) {
    const [t] = useTranslation();
    const { onOpen: openEditPlaylist } = useModal('Playlist-Edit');
    const { onOpen: openDeletePlaylist } = useModal('Playlist-Delete');
    const notify = (text, type) => toast(text, {type:'success'});
    const [playlists] = usePlayer(useShallow(state => [state.playlists]));
    let ids;
    const handleItemClick = ({ id, event, props, data }) => {
        switch (id) {
            case "addtoplaylist":
                // ids = props.map(track => track.id);
                ids = [props.id];
                PlayerAPI.addPlaylistItems(
                    data.id,
                    'tracks',
                    ids
                ).then((res) => {
                    notify(t('toast.added_to_playlist'));
                });

                break;
            default:
                break;
        }
    }



    return(
        <Menu id={id}>
            {playlists && playlists.map((playlist) => (
                <Item id="addtoplaylist" key={`playlist${playlist.id}`} data={{id:playlist.id}} onClick={handleItemClick}>{playlist.name}</Item>
            ))}
        </Menu>
    );

}
