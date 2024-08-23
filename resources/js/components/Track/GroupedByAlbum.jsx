import {groupBy} from "lodash";
import Bar from "../Album/Bar";
import React from "react";
import List from "./List";
import {useSelection} from "../../hooks/useSelection";
import {useContextMenu} from "react-contexify";

export default function GroupedByAlbum({tracks, albums})
{
    const grouped = groupBy(tracks, 'album_id');
    const {rowClicked, selectedRows, escapeKeyHandler, clearSelection, setSelectedRows} = useSelection(tracks);
    const MENU_ID = 'track-menu';
    const { show } = useContextMenu();

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

    return(
        <>
        {albums?.map((album, i) => (
            <div className="w-full mt-6" key={album.id}>
            <Bar key={i} album={album} tracks={grouped[album.id]} />
            {grouped[album.id]?.map((track,j) => (
                <List
                    key={track.id}
                    track={track}
                    iteration={j}
                    rowClicked={rowClicked}
                    selectedRows={selectedRows}
                    clearSelection={clearSelection}
                    context={{
                        'type': 'album',
                        'id': album.id
                    }}
                    displayMenu={displayMenu}
                />
            ))}
            </div>
        ))}
        </>
    );
}
