import {Item, Menu, Separator, Submenu} from "react-contexify";
import {useModal} from "../../hooks/useModal";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import usePlayer from "../../store/playerStore";
import {useShallow} from "zustand/react/shallow";
import {ItemsShareSameValue} from "../../helper/helper";
import {PlayerAPI} from "../../api/PlayerAPI";
import {toast} from "react-toastify";

export default function TrackMenu({id}) {
    const { onOpen: openEditTrack } = useModal('Track-Edit');
    const [t] = useTranslation();
    const navigate = useNavigate();
    const [playlists] = usePlayer(useShallow(state => [state.playlists]));
    const { pathname } = useLocation();
    const notify = (text, type) => toast(text, {type:'success'});
    let params = useParams();
    let ids;
    const handleItemClick = ({ id, event, props, data }) => {
        switch (id) {
            case "play":
                console.log(event, props)
                break;
            case "edit":
                openEditTrack(event,props);
                break;
            case "linkalbum":
                navigate("/album/"+props[0].album_id);
                break;
            case "remove":
                ids = props.map(track => track.id);
                PlayerAPI.removePlaylistItems(params.id, 'tracks', ids).then(() => {
                    document.getElementById('main-scroll').scrollTo(0,0);
                    // navigate(pathname);
                });

                break;
            case "addtoplaylist":
                ids = props.map(track => track.id);
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

    function sameAlbum({ props, data, triggerEvent }) {
        return !ItemsShareSameValue(props, 'album_id');
    }
    function notPlaylist({ props, data, triggerEvent }) {
        return pathname.indexOf('playlist') !== 1;
    }

    return (
        <Menu id={id}>
            <Item id="play" onClick={handleItemClick}>{t('context.play_track')}</Item>
            <Item id="edit" onClick={handleItemClick}>{t('context.edit_track')}</Item>

            <Separator hidden={sameAlbum} />
            <Item hidden={sameAlbum} id="linkalbum" onClick={handleItemClick}>{t('context.goto_album')}</Item>

            <Separator hidden={notPlaylist}/>
            <Item hidden={notPlaylist} id="remove" onClick={handleItemClick}>{t('context.remove_from_playlist')}</Item>

            <Separator />

            <Submenu label={t('context.add_to')}>
                {playlists && playlists.map((playlist) => (
                    <Item id="addtoplaylist" key={`playlist${playlist.id}`} data={{id:playlist.id}} onClick={handleItemClick}>{playlist.name}</Item>
                ))}
            </Submenu>
        </Menu>
    );
}

