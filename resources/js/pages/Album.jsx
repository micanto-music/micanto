import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {PlayerAPI} from "../api/PlayerAPI";
import List from "../components/Track/List";
import {useSelection} from "../hooks/useSelection";
import Header from "../components/Header/Header";
import Scroll from "../components/Scroll";
import Subline from "../components/Subline";
import HeaderTitle from "../components/Header/HeaderTitle";
import PlayAllBtn from "../components/PlayAllBtn";
import HeaderThumbnails from "../components/Header/HeaderThumbnails";
import {useContextMenu} from "react-contexify";
import ContextMenuDots from "../components/ContextMenuDots";
import AlbumMenu from "../components/ContextMenus/AlbumMenu";
import {useTranslation} from "react-i18next";
import useTrackStore from "../store/TrackStore";
import ActivityIndicator from "../components/ActivityIndicator";
import useAlbumStore from "../store/AlbumStore";

export default function Album() {
    const [isLoading, setIsLoading] = useState(true);
    let { id } = useParams();
    const [discs, setDiscs] = useState([]);
    const [items, setItems, addItems] = useTrackStore(state => [state.items, state.setItems, state.addItems]);
    const [album, setAlbum] = useAlbumStore(state => [state.album, state.setAlbum]);
    const {rowClicked, selectedRows,setSelectedRows, escapeKeyHandler, clearSelection} = useSelection(items);
    const MENU_ID = 'track-menu';
    const ALBUM_MENU_ID = 'album-menu';
    const [t] = useTranslation();
    const { show } = useContextMenu();

    useEffect(() => {

        PlayerAPI.getAlbum(id).then((res) => {
            setItems([]);
            setAlbum(res.album);
            let discArr = [];
            for (const [key, value] of Object.entries(res.discs)) {
                let discItem = {
                    'no': key,
                    'tracks': value
                };
                // tracks needed for drag/drop and selection
                addItems(value);

                // for better visuals
                discArr.push(discItem);
            }
            setDiscs(discArr);
            setIsLoading(false);
        })

    }, []);

    // update disc array
    useEffect(() => {
        if(!discs.length) return;
        let newDiscs = [];
        discs.map((disc) => {
            let newDisc = {
                'no': disc.no,
                'tracks': disc.tracks
            }
            items.map((track) => {
                let index = newDisc.tracks.findIndex(music => music.id === track.id);
                newDisc.tracks[index] = track;
            });
            newDiscs.push(newDisc);
        });
        setDiscs(newDiscs);
    }, [items])

    function displayMenu(e, data){
        e.preventDefault();
        let selected = selectedRows;
        if(!data.selected) {
            clearSelection();
            selected = [data];
            setSelectedRows(selected);
            data.selected = true;
        }

        show({
            event: e,
            props: selected,
            id: MENU_ID
        });
    }

    if (isLoading) {
        return <ActivityIndicator />;
    }

    if( !album) {
        return <ActivityIndicator />;
    }

    return (
        <>
            <Header title={album?.name}>
                <HeaderThumbnails items={album? [album] : null}/>
                <div className="flex-col items-start">
                    <HeaderTitle>{album?.name}</HeaderTitle>
                    <Subline tracks={items} album={album}/>
                    <div className="mt-2">
                        <PlayAllBtn context={{
                            'type': 'album',
                            'id': id
                        }}/>
                        <ContextMenuDots menu={ALBUM_MENU_ID} data={album}/>
                    </div>
                </div>
            </Header>

            <Scroll>
                {discs?.map((disc, i) => (
                    <div key={disc.no} className="striped">
                        {discs.length > 1 &&
                        <h4 className="mt-3">{t('disc')} {disc.no}</h4>}

                        {disc?.tracks.map((track, i) => (
                            <List
                                key={track.id}
                                track={track}
                                rowClicked={rowClicked}
                                selectedRows={selectedRows}
                                context={{
                                    type: 'album',
                                    id: album.id
                                }}
                                iteration={i}
                                displayMenu={displayMenu}
                                clearSelection={clearSelection}
                            />
                        ))}
                    </div>
                ))}
            </Scroll>
            <AlbumMenu id={ALBUM_MENU_ID}/>
        </>
    );
}
