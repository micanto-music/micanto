import React, {useState, useEffect, useRef, useCallback} from 'react';
import {PlayerAPI} from "../api/PlayerAPI";
import Card from "../components/Album/Card";
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from "../components/Header/Header";
import Scroll from "../components/Scroll";
import HeaderTitle from "../components/Header/HeaderTitle";
import {useTranslation} from "react-i18next";
import {useContextMenu} from "react-contexify";
import AlbumMenu from "../components/ContextMenus/AlbumMenu";
import ActivityIndicator from "../components/ActivityIndicator";
import useAlbumStore from "../store/AlbumStore";
import useFixMissingScroll from "../hooks/useFixMissingScroll";

export default function Albums() {
    const [items, setItems, addItems] = useAlbumStore(state => [state.items, state.setItems, state.addItems]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [hasNext, setHasNext] = useState(true);
    const [index, setIndex] = useState(2);
    const [t] = useTranslation();
    const MENU_ID = 'album-menu';
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
        PlayerAPI.getAlbums(index)
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
        PlayerAPI.getAlbums(1).then((albums) => {
            // response handling
            setItems(albums.data)
            setIsLoading(false);
            if(albums?.links?.next) {
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
                <Header title={t('albums')}>
                    <HeaderTitle>{t('albums')}</HeaderTitle>
                </Header>
                <Scroll>
                <InfiniteScroll
                    scrollableTarget="main-scroll"
                    dataLength={items.length}
                    next={fetchData}
                    hasMore={hasNext}
                >
                    <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                        {items?.map((album, i) => (
                            <Card
                                selectAble={true}
                                key={i} album={album}
                                displayMenu={displayMenu}
                            />
                        ))}
                    </div>
                </InfiniteScroll>
                    <AlbumMenu id={MENU_ID}/>
                </Scroll>
            </>
    );
}
