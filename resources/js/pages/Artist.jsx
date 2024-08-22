import React, {useEffect, useState} from 'react';
import { useParams }  from 'react-router-dom';
import {PlayerAPI} from "../api/PlayerAPI";
import Card from "../components/Album/Card";
import SmallBar from "../components/Track/SmallBar";
import Header from "../components/Header/Header";
import Scroll from "../components/Scroll";
import Subline from "../components/Subline";
import defaultCover from "../assets/img/logo.svg";
import HeaderTitle from "../components/Header/HeaderTitle";
import PlayAllBtn from "../components/PlayAllBtn";
import {useTranslation} from "react-i18next";
import {LuLayoutGrid, LuLayoutList} from "react-icons/lu";
import classNames from 'classnames';
import GroupedByAlbum from "../components/Track/GroupedByAlbum";
import {useContextMenu} from "react-contexify";
import AlbumMenu from "../components/ContextMenus/AlbumMenu";
import ArtistMenu from "../components/ContextMenus/ArtistMenu";
import ContextMenuDots from "../components/ContextMenuDots";
import useArtistStore from "../store/ArtistStore";
import ActivityIndicator from "../components/ActivityIndicator";

export default function Artist() {
    const [isLoading, setIsLoading] = useState(true);
    // const [artist, setArtist] = useState(null);
    const [artist, setArtist] = useArtistStore(state => [state.artist, state.setArtist]);
    const [tracks, setTracks] = useState(null);
    const [albums, setAlbums] = useState([]);
    const [topTracks, setTopTracks] = useState([]);
    const [featured, setFeatures] = useState([]);
    const [tab, setTab] = useState('grid');

    const [t] = useTranslation();
    let { id } = useParams();

    const MENU_ID = 'album-menu';
    const ARTIST_MENU_ID = 'artist-menu';

    const { show } = useContextMenu({
        id: MENU_ID
    });

    function displayMenu(e, data){
        e.preventDefault();

        show({
            event: e,
            props: data
        });
    }

    function displayTrackMenu() {

    }

    useEffect(() => {
        PlayerAPI.getArtist(id).then((res) => {
            // response handling
            setAlbums(res.albums);
            setArtist(res.artist);
            // setItem([res.artists]);
            setTopTracks(res.topTracks);
            setFeatures(res.featured);
            setTracks(res.tracks);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <>
            <Header title={artist?.name}>
                <div className="thumb-wrapper w-[105px] mr-3">
                    <img
                        className="rounded-lg"
                        src={artist?.image ?  artist?.image : defaultCover}
                    />
                </div>
                <div className="flex-col items-start">
                    <HeaderTitle>{artist?.name}</HeaderTitle>
                    <Subline tracks={tracks} albums={albums}/>
                    <div className="mt-2">
                        <PlayAllBtn context={{
                            'type': 'artist',
                            'id': id
                        }}/>
                        <ContextMenuDots menu={ARTIST_MENU_ID} data={artist}/>
                    </div>
                </div>
            </Header>
            <Scroll>
                {topTracks?.length > 0 && <>
                    <h3>{t('artist.top_tracks')}</h3>
                    <ul className="mb-8">
                    {topTracks?.map((track, i) => (
                        <SmallBar key={track.id} track={track} context={{
                            'type': 'mostPlayedByArtist',
                            'id': id
                        }}/>
                    ))}
                    </ul>
                </>
                }
                {albums?.length > 0 && <>
                    <h3 className="flex flex-row justify-between">
                        <span>{t('artist.discography')}</span>
                        <div className="btn-list">
                            <button className={classNames('mr-2', {'active': tab === 'grid' })} onClick={() => setTab('grid')}><LuLayoutGrid /></button>
                            <button className={classNames({'active': tab === 'list' } )} onClick={() => setTab('list')}><LuLayoutList /></button>
                        </div>
                    </h3>
                    {tab == 'grid' &&
                        <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                            {albums?.map((album, i) => (
                                <Card key={i} album={album} displayMenu={displayMenu}/>
                            ))}
                        </div>
                    }
                    {tab == 'list' &&
                        <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                            <GroupedByAlbum
                                tracks={tracks}
                                albums={albums}
                                displayMenu={displayTrackMenu}
                            />
                        </div>
                    }
                </>
                }
                {featured?.length > 0 && <>
                    <h3 className="mt-8">{t('artist.features')}</h3>
                    <ul>
                    {featured?.map((track, i) => (
                        <SmallBar key={track.id} track={track} />
                    ))}
                    </ul>
                </>
                }
                <AlbumMenu id={MENU_ID}/>
                <ArtistMenu id={ARTIST_MENU_ID} />

            </Scroll>
        </>
    );
}
