import React, {useEffect, useRef, useState} from 'react';
import Table from "../components/Track/Table";
import { PlayerAPI } from '../api/PlayerAPI';
import Scroll from "../components/Scroll";
import Header from "../components/Header/Header";
import HeaderTitle from "../components/Header/HeaderTitle";
import {useTranslation} from "react-i18next";
import PlayAllBtn from "../components/PlayAllBtn";
import HeaderThumbnails from "../components/Header/HeaderThumbnails";
import {useLocation} from "react-router-dom";
import ActivityIndicator from "../components/ActivityIndicator";
import useAlbumStore from "../store/AlbumStore";
import useTrackStore from "../store/TrackStore";
import Subline from "../components/Subline";

export default function Tracks() {
    const [items, setItems, addItems, trackCount, trackLength] = useTrackStore(state => [state.items, state.setItems, state.addItems, state.trackCount, state.trackLength]);
    const [isLoading, setIsLoading] = useState(true);
    const loaderRef = useRef(null);
    const [hasNext, setHasNext] = useState(true);
    const [page,setPage]=useState(1);
    const [t] = useTranslation();
    const location = useLocation();
    const fetchFunction = (sortField = 'tracks.title', order ='asc') => {
        if (!hasNext) return;
        PlayerAPI.getTracks(sortField, order, 1).then((res) => {
            setItems(res.data);
            setIsLoading(false);
        });
    }

    const fetchMore = (sortField = 'tracks.title', order ='asc') => {
        if (!hasNext) return;
        setPage((prevPage) => prevPage + 1);
        PlayerAPI.getTracks(sortField, order, page + 1).then((res) => {

            if(res?.links?.next) {
                setHasNext(true);
            } else {
                setHasNext(false);
            }
            addItems(res.data);
        });
    }

    const handleSorting = (sortField, order) => {
        setPage(1);
        fetchFunction(sortField,order);
    }

    useEffect(() => {
        fetchFunction();
    }, [location]);

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

    const context = {
        type: 'tracks',
        options: {
            'index': 0
        }
    }

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <>
            <Header title={t('tracks')}>
                <HeaderThumbnails items={items}/>
                <div className="flex-col items-start">
                    <HeaderTitle>{t('tracks')}</HeaderTitle>
                    <Subline tracks={items} trackcount={trackCount} length={trackLength}/>
                    <PlayAllBtn context={context}/>
                </div>
            </Header>
            <Scroll>
                <Table
                    tracks={items}
                    cols={cols}
                    handleSorting={handleSorting}
                    fetchMore={fetchMore}
                    hasMore={hasNext}
                    context={context}
                />
                <div ref={loaderRef}>{isLoading && <div>Loading</div>}</div>
            </Scroll>
        </>
    );
}
