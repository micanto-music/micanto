import React, {useEffect, useState, useRef, useCallback} from 'react';
import {PlayerAPI} from "../api/PlayerAPI";
import Card from "../components/Artist/Card";
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from "../components/Header/Header";
import Scroll from "../components/Scroll";
import HeaderTitle from "../components/Header/HeaderTitle";
import {useTranslation} from "react-i18next";
import {useContextMenu} from "react-contexify";
import ArtistMenu from "../components/ContextMenus/ArtistMenu";
import ActivityIndicator from "../components/ActivityIndicator";
import useArtistStore from "../store/ArtistStore";
import useFixMissingScroll from "../hooks/useFixMissingScroll";

export default function Artists() {
    const [items, setItems, addItems] = useArtistStore(state => [state.items, state.setItems, state.addItems]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [hasNext, setHasNext] = useState(true);
    const [index, setIndex] = useState(2);
    const [t] = useTranslation();
    const MENU_ID = 'artist-menu';
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

    const fetchData = useCallback(async () => {
        if (isLoadingMore) return;
        if (!hasNext) return;

        setIsLoadingMore(true);
        PlayerAPI.getArtists(index)
            .then((res) => {
                addItems(res.data);
                setIsLoadingMore(false);
                if(!res.links.next) {
                    setHasNext(false);
                }
            })
            .catch((err) => console.log(err));

        setIndex((prevIndex) => prevIndex + 1);

    }, [index, isLoadingMore]);

    useEffect(() => {
        PlayerAPI.getArtists(1).then((artists) => {
            // response handling
            setItems(artists.data)
            setIsLoading(false);
            setIsLoadingMore(false);
            if(artists?.links?.next) {
                setHasNext(true);
            }
        })
    }, []);

    useFixMissingScroll({
        hasMoreItems: hasNext,
        fetchMoreItems: fetchData,
        isLoading: isLoading
    })

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <>
            <Header title={t('artists')}>
                <HeaderTitle>{t('artists')}</HeaderTitle>
            </Header>
            <Scroll>
                <InfiniteScroll
                    scrollableTarget="main-scroll"
                    dataLength={items.length}
                    next={fetchData}
                    hasMore={hasNext}
                >
                <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                    {items?.map((artist, i) => (
                        <Card key={artist.id} artist={artist}
                              displayMenu={displayMenu}
                        />
                    ))}
                </div>
                </InfiniteScroll>
            </Scroll>
            <ArtistMenu id={MENU_ID}/>
        </>
    );
}
