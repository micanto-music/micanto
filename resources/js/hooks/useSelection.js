
import isMobile from "ismobilejs";
import {useState} from "react";
import { findIndex } from 'lodash'
export const useSelection = (tracks) => {

    const [lastSelectedRow, setLastSelectedRow] = useState();
    const [selectedRows, setSelectedRows] = useState([]);

    const escapeKeyHandler = (event) => {
        if(event.key === 'Escape') {
            clearSelection();
        }
    }

    const rowClicked = (event, row) => {
        // If we're on a touch device, or if Ctrl/Cmd key is pressed, just toggle selection.
        if (isMobile.any) {
            toggleRow(row)
            return
        }

        if (event.ctrlKey || event.metaKey) {
            toggleRow(row)
        }

        if (event.button === 0) {
            if (!(event.ctrlKey || event.metaKey || event.shiftKey)) {
                clearSelection();
                toggleRow(row);
            }

            if (event.shiftKey && lastSelectedRow) {
                selectRowsBetween(lastSelectedRow, row)
            }
        } else {
            row.selected = true;
            setSelectedRows(tracks.filter(row => row.selected).map(row => row));
            setLastSelectedRow(row);
        }
    }

    const toggleRow = (row) => {
        row.selected = !row.selected;
        setSelectedRows(tracks.filter(row => row.selected).map(row => row));
        setLastSelectedRow(row);
    }

    const clearSelection = () => {
        tracks.forEach(row => (row.selected = false));
        setSelectedRows([]);
    }

    const selectRowsBetween = (start, end) => {
        const firstIndex = Math.max(0, findIndex(tracks, row => row.id === start.id))
        const secondIndex = Math.max(0, findIndex(tracks, row => row.id === end.id))
        const indexes = [firstIndex, secondIndex]
        indexes.sort((a, b) => a - b)

        for (let i = indexes[0]; i <= indexes[1]; ++i) {
            tracks[i].selected = true
        }
        setSelectedRows(tracks.filter(row => row.selected).map(row => row));
        // setLastSelectedRow(end);
    }

    return {
        rowClicked,
        selectedRows,
        setSelectedRows,
        escapeKeyHandler,
        clearSelection
    }
}
