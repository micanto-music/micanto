import {Item, Menu, Separator, Submenu} from "react-contexify";
import {useModal} from "../../hooks/useModal";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import usePlayer from "../../store/playerStore";
import {useShallow} from "zustand/react/shallow";
import {PlayerAPI} from "../../api/PlayerAPI";
import {toast} from "react-toastify";

export default function ArtistMenu({id}) {
    const { onOpen: openEditArtist } = useModal('Artist-Edit');
    const [t] = useTranslation();
    const navigate = useNavigate();
    const [playlists, setShuffle, playContext] = usePlayer(useShallow(state => [state.playlists,  state.setShuffle, state.playContext]));


    const playAll = async(artist_id, shuffled = false) => {
        let context = {
            'type': 'artist',
            'id': artist_id
        }

        playContext(context, null, shuffled);
    };

    const notify = (text) => toast(text, {type:'success'});

    const handleItemClick = ({ id, event, props, data }) => {
        switch (id) {
            case "play":
                playAll(props.id);
                break;
            case "shuffle":
                setShuffle(true);
                playAll(props.id, true);
                break;
            case "edit":
                openEditArtist(event,props);
                break;
            case "linkartist":
                navigate("/artist/"+props.id);
                break;
            case "add_to_playlist":
                PlayerAPI.addPlaylistItems(
                    data.id,
                    'artist',
                    [props.id]
                ).then((res) => {
                    notify(t('toast.artist_added_to_playlist'));
                });
                break;
            default:
                break;
        }
    }

    return (
        <Menu id={id}>
            <Item id="play" onClick={handleItemClick}>{t('context.play_artist')}</Item>
            <Item id="shuffle" onClick={handleItemClick}>{t('context.shuffle_artist')}</Item>
            <Item id="edit" onClick={handleItemClick}>{t('context.edit_artist')}</Item>
            <Item id="linkartist" onClick={handleItemClick}>{t('context.goto_artist')}</Item>
            <Separator />
            <Submenu label={t('context.add_to')}>
                {playlists && playlists.map((playlist) => (
                    <Item data={{id:playlist.id}} id="add_to_playlist" key={`playlist${playlist.id}`} onClick={handleItemClick}>{playlist.name}</Item>
                ))}
            </Submenu>
        </Menu>
    );
}

