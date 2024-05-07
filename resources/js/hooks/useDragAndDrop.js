import {makeArray} from "../helper/helper";
import {useTranslation} from "react-i18next";
const DragItemTypes = ['tracks', 'album', 'artist'];

const createGhostDragImage = (event, text) => {
    if (!event.dataTransfer) {
        return
    }

    let dragGhost = document.querySelector < HTMLElement > ('#dragGhost')

    if (!dragGhost) {
        // Create the element to be the ghost drag image.
        dragGhost = document.createElement('div')
        dragGhost.id = 'dragGhost'
        document.body.appendChild(dragGhost)
    }

    dragGhost.innerText = text
    event.dataTransfer.setDragImage(dragGhost, 0, 0)
}


const getDragType = (event) => {
    return DragItemTypes.find(type => event.dataTransfer?.types.includes(`application/x-micanto.${type}`))
}

export const useDraggable = (type) => {
    const [t] = useTranslation();
    const startDragging = (event, dragged) => {

        if (!event.dataTransfer) {
            return;
        }

        event.dataTransfer.effectAllowed = 'copyMove';

        let text;
        let data;

        switch (type) {
            case 'tracks':
                dragged = makeArray(dragged);
                text = dragged.length === 1 ? `${dragged[0].title} ${t('by')} ${dragged[0].artists[0].name}` : dragged.length + ' '+ t('dnd.tracks') ;
                data = dragged.map(track => track.id);
                break;
            case 'album':
                text = t('dnd.album') +' '+ dragged.name;
                data = [dragged.id];
                break;
            case 'artist':
                text = t('dnd.artist') +' '+ dragged.name;
                data = [dragged.id];
                break;
            default:
                return
        }

        event.dataTransfer.setData(`application/x-micanto.${type}`, JSON.stringify(data));

        createGhostDragImage(event, text);
    }
    return {
        startDragging
    }
}

export const useDroppable = (acceptedTypes) => {
    const acceptsDrop = (event) => {
        const type = getDragType(event);
        return Boolean(type && acceptedTypes.includes(type));
    }

    const getDroppedData = (event) => {
        const type = getDragType(event)
        if (!type) return null

        try {
            return JSON.parse(event.dataTransfer?.getData(`application/x-micanto.${type}`));
        } catch (e) {
            //logger.warn('Failed to parse dropped data', e)
            return null
        }
    }

    return {
        acceptsDrop,
        getDroppedData,
        getDragType
    }
}
