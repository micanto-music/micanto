import {Item, Menu, Separator, Submenu} from "react-contexify";
import {useModal} from "../../hooks/useModal";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import usePlayer from "../../store/playerStore";
import {useShallow} from "zustand/react/shallow";
import {ItemsShareSameObjectValues, ItemsShareSameValue} from "../../helper/helper";
import {PlayerAPI} from "../../api/PlayerAPI";
import {toast} from "react-toastify";
import {useAuth} from "../../contexts/AuthContext";

export default function TrackMenu({id}) {
    const { onOpen: openEditTrack } = useModal('Track-Edit');
    const [t] = useTranslation();
    const navigate = useNavigate();
    const [playlists, musicContext, playContext, shuffle] = usePlayer(useShallow(state => [state.playlists, state.musicContext, state.playContext, state.shuffle]));
    const { user} = useAuth();
    const { pathname } = useLocation();
    const notify = (text, type) => toast(text, {type:'success'});
    let params = useParams();
    let ids;

    const playTracksInContext = (tracks) => {

        if(tracks.length === 0) {
            return;
        }

        // if only 1 song, get queue by context
        if(tracks.length === 1) {
            let track = tracks[0];
            playContext(musicContext, track, shuffle);
        }
        // else add only selected tracks to queue
        else {
            let track = tracks[0];
            ids = tracks.map(track => track.id);
            const context = {
                'type': 'handpicked',
                'ids': ids,
                'options': {
                    'shuffle': shuffle
                }
            }

            playContext(context, track, shuffle);
        }
    };

    const handleItemClick = ({ id, event, props, data }) => {
        switch (id) {
            case "play":
                playTracksInContext(props);
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

    function sameAlbum({ props }) {
        return !ItemsShareSameValue(props, 'album_id');
    }

    function sameArtist({ props }) {
        return !ItemsShareSameObjectValues(props, 'artists');
    }
    function notPlaylist() {
        return pathname.indexOf('playlist') !== 1;
    }

    const nonAdmin = user.is_admin == 0;

    return (
        <Menu id={id}>
            <Item id="play" onClick={handleItemClick}>{t('context.play_track')}</Item>
            <Item hidden={nonAdmin} id="edit" onClick={handleItemClick}>{t('context.edit_track')}</Item>

            <Separator hidden={sameAlbum} />
            <Item hidden={sameAlbum} id="linkalbum" onClick={handleItemClick}>{t('context.goto_album')}</Item>
            <Item hidden={sameArtist} id="linkalbum" onClick={handleItemClick}>{t('context.goto_artist')}</Item>

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

