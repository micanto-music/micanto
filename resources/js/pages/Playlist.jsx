import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {PlayerAPI} from "../api/PlayerAPI";
import Table from "../components/Track/Table";
import Header from "../components/Header/Header";
import Scroll from "../components/Scroll";
import usePlayer from "../store/playerStore";
import {useShallow} from "zustand/react/shallow";
import HeaderTitle from "../components/Header/HeaderTitle";
import HeaderThumbnails from "../components/Header/HeaderThumbnails";
import {useTranslation} from "react-i18next";
import Subline from "../components/Subline";
import PlayAllBtn from "../components/PlayAllBtn";
import ContextMenuDots from "../components/ContextMenuDots";
import ActivityIndicator from "../components/ActivityIndicator";
import useTrackStore from "../store/TrackStore";
import CompactHeader from "../components/Header/CompactHeader";
export default function Playlist() {
    const [isLoading, setIsLoading] = useState(true);
    const [playlist, setPlaylist] = useState(null);
    const [items, setItems, addItems] = useTrackStore(state => [state.items, state.setItems, state.addItems]);
    const [hasNext, setHasNext] = useState(true);
    const [page,setPage]=useState(1);
    const [sortField, setSortField] = useState('tracks.title');
    const [order, setOrder] = useState('asc');
    const [playlists] = usePlayer(useShallow(state => [state.playlists]));
    const [t] = useTranslation();
    let { id } = useParams();

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
            'class': 'flex-1'
        },
        {
            'accessor': 'tracks.duration',
            'label': 'table.headers.duration',
            'class': 'basis-24'
        },
        {
            'accessor': 'playlist_track.created_at',
            'label': 'table.headers.added_at',
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
        PlayerAPI.getPlaylist(id, sortField, order, 1).then((tracks) => {
            setItems(tracks.data);
        });
    }

    const fetchMore = (sortField = 'tracks.title', order ='asc') => {
        if (!hasNext) return;
        setPage((prevPage) => prevPage + 1);
        PlayerAPI.getPlaylist(id,sortField, order, page + 1).then((tracks) => {

            if(tracks?.links?.next) {
                setHasNext(true);
            } else {
                setHasNext(false);
            }
            addItems(tracks.data);
        });
    }

    const context = {
        type: 'playlist',
        id: id,
        options: {
            index: 0,
            sortField: sortField,
            order: order
        }
    }

    useEffect(() => {
        let pl = playlists.filter(obj => {
            return obj.id == id
        })
        setPlaylist(pl? pl[0] : null);
        PlayerAPI.getPlaylist(id).then((res) => {
            setItems(res.data);
            setIsLoading(false);
        })
    }, [id, playlists]);

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <>
            {items.length > 0 &&
                    <Scroll>
                        {playlist &&
                            <>
                            <Header title={playlist?.name}>
                                <HeaderThumbnails items={[playlist]}/>
                                <div className="flex-col items-start">
                                    <HeaderTitle>{playlist?.name}</HeaderTitle>
                                    <Subline tracks={items} trackcount={playlist?.tracks_count} length={playlist?.length}/>
                                    <div className="mt-2">
                                        <PlayAllBtn context={context}/>
                                        <ContextMenuDots menu="playlist-menu" data={playlist}/>
                                    </div>
                                </div>
                            </Header>
                            <CompactHeader title={playlist?.name} context={context} />
                            </>
                        }
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
