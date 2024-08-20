import Scroll from "../components/Scroll";
import React, {useEffect, useState} from "react";
import useTrackStore from "../store/TrackStore";
import {useTranslation} from "react-i18next";
import {useLocation, useParams} from "react-router-dom";
import {PlayerAPI} from "../api/PlayerAPI";
import ActivityIndicator from "../components/ActivityIndicator";
import Header from "../components/Header/Header";
import HeaderThumbnails from "../components/Header/HeaderThumbnails";
import HeaderTitle from "../components/Header/HeaderTitle";
import Subline from "../components/Subline";
import PlayAllBtn from "../components/PlayAllBtn";
import ContextMenuDots from "../components/ContextMenuDots";
import Table from "../components/Track/Table";

export default function Favorites() {
    const [isLoading, setIsLoading] = useState(true);
    const [playlist, setPlaylist] = useState(null);
    const [items, setItems, addItems] = useTrackStore(state => [state.items, state.setItems, state.addItems]);
    const [hasNext, setHasNext] = useState(true);
    const [page,setPage]=useState(1);
    const [sortField, setSortField] = useState('tracks.title');
    const [order, setOrder] = useState('asc');
    const [t] = useTranslation();
    const location = useLocation();

    const cols = [
        {
            'accessor' : 'tracks.track',
            'label': '#',
            'class': 'basis-16'
        },
        {
            'accessor': 'tracks.title',
            'label': 'table.headers.title',
            'class': 'flex-1'
        },
        {
            'accessor': 'albums.name',
            'label': 'table.headers.album',
            'class': 'basis-2/6'
        },
        {
            'accessor': 'tracks.duration',
            'label': 'table.headers.duration',
            'class': 'basis-24'
        }
    ];

    const handleSorting = (sortField, order) => {
        setPage(1);
        setSortField(sortField);
        setOrder(order);
        fetchFunction(sortField,order);
    }

    const fetchFunction = (sortField = 'tracks.title', order ='asc') => {
        if (!hasNext) return;
        PlayerAPI.getFavorites(sortField, order, 1).then((tracks) => {
            setItems(tracks.data);
            setIsLoading(false);
        });
    }

    const fetchMore = (sortField = 'tracks.title', order ='asc') => {
        if (!hasNext) return;
        setPage((prevPage) => prevPage + 1);
        PlayerAPI.getFavorites(sortField, order, page + 1).then((tracks) => {

            if(tracks?.links?.next) {
                setHasNext(true);
            } else {
                setHasNext(false);
            }
            addItems(tracks.data);
        });
    }

    const context = {
        type: 'favorites',
        options: {
            index: 0,
            sortField: sortField,
            order: order
        }
    }

    useEffect(() => {
        fetchFunction();

    }, [location]);

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <>
            <Header title={t('favorites')}>
                <HeaderThumbnails items={items}/>
                <div className="flex-col items-start">
                    <HeaderTitle>{t('favorites')}</HeaderTitle>
                    <Subline tracks={items}/>
                    <div className="mt-2">
                        <PlayAllBtn context={context}/>
                        <ContextMenuDots menu="playlist-menu" data={playlist}/>
                    </div>
                </div>
            </Header>
            {items.length > 0 &&
                <Scroll>
                    <Table
                        tracks={items}
                        cols={cols}
                        handleSorting={handleSorting}
                        fetchMore={fetchMore}
                        hasMore={hasNext}
                        context={context}
                    />
                </Scroll>
            }
            {items.length === 0 &&
                <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                        <h2>{t('playlist.empty.title')}</h2>
                        {t('playlist.empty.body')}
                    </div>
                </div>
            }
        </>
    );
}
