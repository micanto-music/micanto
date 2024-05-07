import {Item, Menu, Separator, Submenu} from "react-contexify";
import {useModal} from "../../hooks/useModal";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import usePlayer from "../../store/playerStore";
import {useShallow} from "zustand/react/shallow";
import {PlayerAPI} from "../../api/PlayerAPI";
import {toast} from "react-toastify";
import MicantoPlayer from "../../services/MicantoPlayer";
import useSelection from "../../store/SelectionStore";
import useAlbumStore from "../../store/AlbumStore";
export default function AlbumMenu({id}) {
    const { onOpen: openEditAlbum } = useModal('Album-Edit');
    const [t] = useTranslation();
    const navigate = useNavigate();
    const [playlists, setShuffle, playContext] = usePlayer(useShallow(state => [state.playlists, state.setShuffle, state.playContext]));
    const [selected] = useSelection(useShallow(state => [state.selected]));
    const updateItems = useAlbumStore((state) => state.updateItems);
    const notify = (text) => toast(text, {type:'success'});

    const playAll = async(album_id, shuffled = false) => {
        let context = {
            'type': 'album',
            'id': album_id
        }
        playContext(context, null, shuffled);
    };

    const handleItemClick = async({ id, event, props, data }) => {
        switch (id) {
            case "play":
                await playAll(props.id);
                break;
            case "shuffle":
                await playAll(props.id, true);
                break;
            case "edit":
                openEditAlbum(event,props);
                break;
            case "linkalbum":
                navigate("/album/"+props.id);
                break;
            case "combine":
                const formData = new FormData();
                // add ids as array
                selected.map((element) => {
                    formData.append('albums[]', element.id);
                });
                PlayerAPI.combineAlbums(formData).then((res) => {
                    updateItems(res);
                });
                break;
            case "add_to_playlist":
                PlayerAPI.addPlaylistItems(
                    data.id,
                    'album',
                    [props.id]
                ).then((res) => {
                    notify(t('toast.album_added_to_playlist'));
                });
                break;
            default:
                break;
        }
    }

    const singleSelect = selected.length < 2;

    return (
        <Menu id={id}>
            <Item id="play" onClick={handleItemClick}>{t('context.play_album')}</Item>
            <Item id="shuffle" onClick={handleItemClick}>{t('context.shuffle_album')}</Item>
            <Item id="edit" onClick={handleItemClick}>{t('context.edit_album')}</Item>
            <Item id="combine" hidden={singleSelect} onClick={handleItemClick}>{t('context.combine_albums')}</Item>
            <Item id="linkalbum" onClick={handleItemClick}>{t('context.goto_album')}</Item>
            <Separator />
            <Submenu label={t('context.add_to')}>
                {playlists && playlists.map((playlist) => (
                    <Item data={{id:playlist.id}} id="add_to_playlist" key={`playlist${playlist.id}`} onClick={handleItemClick}>{playlist.name}</Item>
                ))}
            </Submenu>
        </Menu>
    );
}

