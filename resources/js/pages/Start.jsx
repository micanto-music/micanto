import React from 'react';
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
import { useQuery } from 'react-query';

const Start = () => {
    const [t] = useTranslation();
    const { onOpen: openAddPlaylist } = useModal('Playlist-Add');

    const TRACK_MENU_ID = 'track-menu';
    const ALBUM_MENU_ID = 'album-menu';
    const { show } = useContextMenu();

    const { data: overview, isLoading } = useQuery('overview', PlayerAPI.getOverview);
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

    if (isLoading) {
        return <ActivityIndicator />;
    }

    const {
        most_played: mostPlayed = [],
        last_played: lastPlayed = [],
        latest_tracks: latestTracks = [],
        latest_albums: latestAlbums = [],
        playlists: yourPlaylists = []
    } = overview || {};

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
                                    {lastPlayed.map((track) => (
                                        <Bar
                                            key={track.id}
                                            track={track}
                                            context={{ 'type': 'lastPlayed' }}
                                            displayMenu={displayMenu}
                                        />
                                    ))}
                                </div>
                            </div>
                            {mostPlayed.length > 0 &&
                                <div>
                                    <h3 className="text-white">{t('start.most_played')}</h3>
                                    <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                                        {mostPlayed.map((track) => (
                                            <Bar
                                                key={track.id}
                                                track={track}
                                                context={{ 'type': 'mostPlayed' }}
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
                                    {latestTracks.map((track) => (
                                        <Bar
                                            key={track.id}
                                            track={track}
                                            context={{ 'type': 'latestTracks' }}
                                            displayMenu={displayMenu}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white">{t('start.your_playlists')}</h3>
                                <div className="flex flex-wrap gap-4">
                                    {yourPlaylists.map((playlist) => (
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
                            {latestAlbums.map((album) => (
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
