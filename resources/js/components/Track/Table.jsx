import TableItem from "./TableItem";
import React, {useEffect, useState} from "react";
import { RxCaretDown,RxCaretUp } from "react-icons/rx";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useTranslation} from "react-i18next";
import {useSelection} from "../../hooks/useSelection";
import PlaylistMenu from "../ContextMenus/PlaylistMenu";
import TrackMenu from "../ContextMenus/TrackMenu";
import {useContextMenu} from "react-contexify";

const Table = ({ tracks, cols, handleSorting, fetchMore, hasMore, context, options = [] }) => {
    const [sortField, setSortField] = useState('tracks.title');
    const [order, setOrder] = useState('asc');
    const [t] = useTranslation();
    const {rowClicked, selectedRows,setSelectedRows, escapeKeyHandler, clearSelection} = useSelection(tracks);
    const MENU_ID = 'track-menu';
    const { show } = useContextMenu({
        id: MENU_ID
    });
    let itemStatusMap = {};
    const isItemLoaded = index => !!itemStatusMap[index];

    useEffect(() => {
        if(selectedRows.length) {
            document.addEventListener('keydown', escapeKeyHandler);
        } else {
            document.removeEventListener('keydown', escapeKeyHandler);
        }
        return  () => {
            document.removeEventListener('keydown', escapeKeyHandler);
        };
    }, [selectedRows]);

    const handleSortingChange = (accessor) => {
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };

    const handleMore = () => {
        fetchMore(sortField, order);
    }

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
            props: selected
        });
    }

    return(
        <>
            {tracks &&
                <>
                <div className="sticky-header flex p-2">
                    {cols?.map((col, i) => (
                        <div onClick={() => handleSortingChange(col.accessor)} key={col.label} className={`${col.class} table-header`}>
                            <span className="table-label">{t(col.label)}</span>
                            { col.accessor === sortField && order === 'asc' && <span className="table-sort"><RxCaretDown size="20"/></span> }
                            { col.accessor === sortField && order === 'desc' && <span className="table-sort"><RxCaretUp size="20" /></span> }
                        </div>
                    ))}
                    <div className="table-header basis-10 py-2"></div>
                </div>
                    <InfiniteScroll
                        scrollableTarget="main-scroll"
                        dataLength={tracks.length}
                        next={handleMore}
                        hasMore={hasMore}
                    >
                        <div className="striped">
                            {tracks?.map((track, i) => (
                                <TableItem
                                    index={i}
                                    key={track.id}
                                    track={track}
                                    cols={cols}
                                    context={context}
                                    rowClicked={rowClicked}
                                    selectedRows={selectedRows}
                                    clearSelection={clearSelection}
                                    setSelectedRows={setSelectedRows}
                                    displayMenu={displayMenu}
                                />
                            ))}
                        </div>
                    </InfiniteScroll>
                    <TrackMenu id={MENU_ID}/>
            </>
            }
        </>
    );
}

export default Table;
