import React, { useEffect, useState } from 'react';
import Bar from '../components/Track/Bar';
import { PlayerAPI } from '../api/PlayerAPI';
import Header from "../components/Header/Header";
import {useTranslation} from "react-i18next";
import Scroll from "../components/Scroll";
import Card from "../components/Album/Card";
import HeaderTitle from "../components/Header/HeaderTitle";
import Tile from "../components/Playlist/Tile";
import {useContextMenu} from "react-contexify";
import ActivityIndicator from "../components/ActivityIndicator";
import {FiPlusSquare} from "react-icons/fi";
import {useModal} from "../hooks/useModal";
import AlbumMenu from "../components/ContextMenus/AlbumMenu";
import useAlbumStore from "../store/AlbumStore";
import useTrackStore from "../store/TrackStore";

const Start = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [latestAlbums, setLatestAlbums] = useAlbumStore(state => [state.items, state.setItems]);
    const [yourPlaylists, setYourPlaylists] = useState([])
    const [typedItems, setTypedItems] = useTrackStore(state => [state.typedItems, state.setTypedItems])
    const [t] = useTranslation();
    const { onOpen: openAddPlaylist } = useModal('Playlist-Add');

    const TRACK_MENU_ID = 'track-menu';
    const ALBUM_MENU_ID = 'album-menu';
    const { show } = useContextMenu();

    function displayMenu(e, data) {
        e.preventDefault();
        show({
            event: e,
            props: [data],
            id: TRACK_MENU_ID
        });
    }

    function displayAlbumMenu(e, data) {
        e.preventDefault();
        show({
            event: e,
            props: data,
            id: ALBUM_MENU_ID
        });
    }

    useEffect(() => {
        PlayerAPI.getOverview().then((res) => {
            // response handling
            setTypedItems(res.most_played, 'mostPlayed');
            setTypedItems(res.last_played, 'lastPlayed');
            setTypedItems(res.latest_tracks, 'latestTracks');

            setLatestAlbums(res.latest_albums);
            setYourPlaylists(res.playlists);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <>
            <Scroll>
                <Header title={t('menu.start')}>
                    <HeaderTitle>{t('menu.start')}</HeaderTitle>
                </Header>
                <div className="pl-5 pr-2">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-white">{t('start.last_played')}</h3>
                                <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                                    {typedItems?.lastPlayed?.map((track, i) => (
                                        <Bar
                                            key={track.id}
                                            track={track}
                                            context={{
                                                'type': 'lastPlayed'
                                            }}
                                            displayMenu={displayMenu}
                                        />
                                    ))}
                                </div>
                            </div>
                            {typedItems?.mostPlayed?.length > 0 &&
                                <div>
                                    <h3 className="text-white">{t('start.most_played')}</h3>
                                    <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                                        {typedItems?.mostPlayed?.map((track, i) => (
                                            <Bar
                                                key={track.id}
                                                track={track}
                                                context={{
                                                    'type': 'mostPlayed'
                                                }}
                                                displayMenu={displayMenu}
                                            />
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col mt-8">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-white">{t('start.latest_tracks')}</h3>
                                <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                                    {typedItems?.latestTracks?.map((track, i) => (
                                        <Bar
                                            key={track.id}
                                            track={track}
                                            context={{
                                                'type': 'latestTracks'
                                            }}
                                            displayMenu={displayMenu}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white">{t('start.your_playlists')}</h3>
                                <div className="flex flex-wrap gap-4">
                                    {yourPlaylists?.map((playlist, i) => (
                                        <Tile playlist={playlist} key={playlist.id}/>
                                    ))}
                                    {yourPlaylists.length === 0 &&
                                        <a onClick={openAddPlaylist} className="playlist-tile cursor-pointer">
                                            <div className="tiles flex gap-2 mb-6">
                                                <div className="tile"><FiPlusSquare size={24}/></div>
                                            </div>
                                            <h4 className="truncate">{t('playlist.add')}</h4>
                                    </a>}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-white">{t('start.latest_albums')}</h3>
                        <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                            {latestAlbums?.map((album, i) => (
                                <Card
                                    key={album.id}
                                    album={album}
                                    displayMenu={displayAlbumMenu}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Scroll>
            <AlbumMenu id={ALBUM_MENU_ID}/>
        </>
    );
};

export default Start;
