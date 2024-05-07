import React, { useEffect, useState, useCallback } from 'react';
import { PlayerAPI } from '../api/PlayerAPI';
import debounce from 'lodash/debounce'
import SmallBar from "../components/Track/SmallBar";
import AlbumCard from "../components/Album/Card";
import ArtistCard from "../components/Artist/Card";
import Header from "../components/Header/Header";
import Scroll from "../components/Scroll";
import HeaderTitle from "../components/Header/HeaderTitle";
import {useTranslation} from "react-i18next";
import CardWrapper from "../components/CardWrapper";
import Card from "../components/Track/Card";
import LastSearches from "../components/LastSearches";
import AlbumMenu from "../components/ContextMenus/AlbumMenu";
import ArtistMenu from "../components/ContextMenus/ArtistMenu";
import TrackMenu from "../components/ContextMenus/TrackMenu";
import {useContextMenu} from "react-contexify";

const Search = () => {

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [lastSearches, setLastSearches] = useState(() => {
        const val = localStorage.getItem('lastSearches');
        if(val == null) return [];
        return JSON.parse(val);
    });

    const TRACK_MENU_ID = 'track-menu';
    const ALBUM_MENU_ID = 'album-menu';
    const ARTIST_MENU_ID = 'artist-menu';

    const { show } = useContextMenu();
    function displayMenu(e,data){
        e.preventDefault();
        let menu = ARTIST_MENU_ID;

        switch(data?.type) {
            case 'albums':
                menu = ALBUM_MENU_ID
                break;
            case 'tracks':
                menu = TRACK_MENU_ID
                break;
            case 'artists':
                menu = ARTIST_MENU_ID
                break;
        }

        show({
            event: e,
            props: data,
            id: menu
        });
    }

    const [t] = useTranslation();
    useEffect(() => {
        document.getElementById('searchbar').focus();
    }, []);


    const debouncedSave = useCallback(
        debounce((newValue) => fetchData(newValue), 500),
        []
    );

    const updateValue = (newValue) => {
        setQuery(newValue);
        debouncedSave(newValue);
    };

    const removeFromLastSearch = (e) => {
        let el = e.currentTarget.parentElement;
        const index = [...el.parentElement.children].indexOf(el);
        setLastSearches( prevLastSearches => {
            prevLastSearches.splice(index, 1);
            return [...prevLastSearches];
        });
    }

    const fetchData = async (term) => {
        try {
            PlayerAPI.searchFor(term).then((res) => {
                setResult(res);
                if(res?.top) {
                    setLastSearches(prevLastSearches => {
                        if(!prevLastSearches.some(search => {
                            return search.type === res.top.type && search.id === res.top.id
                        })) {
                            if(prevLastSearches.length == 10) {
                                prevLastSearches.pop();
                            }
                            return [res.top, ...prevLastSearches];
                        } else {
                            return [...prevLastSearches];
                        }
                    })
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        localStorage.setItem('lastSearches', JSON.stringify(lastSearches));
    }, [lastSearches]);

    return (
        <>
            <Header title={t('search.title')}>
                <HeaderTitle>{t('search.title')}</HeaderTitle>
            </Header>
            <Scroll>
                <div className="w-full">
                    <input
                        id="searchbar" className="bg-music-light mb-4 w-full"
                        placeholder={t('search.placeholder')}
                        onChange={(input) => updateValue(input.target.value)}
                        value={query}
                    />
                    {query == '' &&
                        <LastSearches lastSearches={lastSearches} removeFromLastSearch={removeFromLastSearch}/>
                    }
                </div>
                <div>
                    <div className="flex">
                        {result?.top &&
                            <div>
                                <h2 className="mb-2">{t('search.top_result')}</h2>
                                {result?.top?.type == 'tracks' &&
                                    <Card
                                        key={result?.top.id}
                                        track={result?.top}
                                        width={200}
                                        displayMenu={displayMenu}
                                    />
                                }
                                {result?.top?.type == 'artist' &&
                                    <ArtistCard
                                        key={result?.top.id}
                                        artist={result?.top}
                                        width={222}
                                        displayMenu={displayMenu}
                                    />
                                }
                                {result?.top?.type == 'albums' &&
                                    <AlbumCard
                                        key={result?.top.id}
                                        album={result?.top}
                                        width={200}
                                        displayMenu={displayMenu}
                                    />
                                }
                            </div>
                        }
                        {result?.tracks?.length > 0 &&
                            <div className="ml-4 w-full">
                                <h2 className="mb-2">{t('search.tracks')}</h2>
                                <ul>
                                    {result?.tracks?.map((track, i) => (
                                        <SmallBar
                                            key={track.id}
                                            track={track}
                                        />
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                    {result?.albums?.length > 0 &&
                        <div className="mt-6">
                            <h2 className="mb-2">{t('search.albums')}</h2>
                            <CardWrapper>
                            {result?.albums?.map((album, i) => (
                                <AlbumCard
                                    key={album.id}
                                    album={album}
                                    displayMenu={displayMenu}
                                />
                            ))}
                            </CardWrapper>
                        </div>
                    }
                    {result?.artists?.length > 0 &&
                        <div className="mt-6">
                            <h2 className="mb-2">{t('search.artists')}</h2>
                            <CardWrapper>
                                {result?.artists?.map((artist, i) => (
                                    <ArtistCard
                                        key={artist.id}
                                        artist={artist}
                                        displayMenu={displayMenu}
                                    />
                                ))}
                            </CardWrapper>
                        </div>
                    }
                </div>
            </Scroll>
            <TrackMenu id={TRACK_MENU_ID}/>
            <AlbumMenu id={ALBUM_MENU_ID}/>
            <ArtistMenu id={ARTIST_MENU_ID} />
        </>
    )
}

export default Search;
