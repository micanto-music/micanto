import {groupBy} from "lodash";
import Bar from "../Album/Bar";
import React from "react";
import List from "./List";
import {useSelection} from "../../hooks/useSelection";

export default function GroupedByAlbum({tracks, albums})
{
    const grouped = groupBy(tracks, 'album_id');
    const {rowClicked, selectedRows, escapeKeyHandler} = useSelection(tracks);
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
                />
            ))}
            </div>
        ))}
        </>
    );
}
