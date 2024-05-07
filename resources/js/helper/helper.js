import {sampleSize, sumBy} from "lodash";
import {VALID_IMAGE_TYPES} from "../assets/constants";

export const formatToHis = (total) => {
    total = Math.round(total)
    const parts = []

    const hours = Math.floor(total / 3600)

    if (hours > 0) {
        parts.push(hours.toString().padStart(2, '0'))
    }

    parts.push((Math.floor((total / 60) % 60)).toString().padStart(2, '0'))
    parts.push((total % 60).toString().padStart(2, '0'))

    return parts.join(':')
}

export const formatForHuman = (total, t) => {
    total = Math.round(total)

    const hours = Math.floor(total / 3600)
    const minutes = Math.floor((total - hours * 3600) / 60)
    const seconds = total - hours * 3600 - minutes * 60

    const parts= []

    if (hours > 0) {
        parts.push(`${hours} ${t('format.hr')}`)
    }

    if (minutes > 0) {
        parts.push(`${minutes} ${t('format.min')}`)
    }

    if (seconds > 0 && hours < 1) {
        parts.push(`${seconds} ${t('format.sec')}`)
    }

    return parts.join(' ') || '0 '+t('format.sec')
}

export const getTracklistLength = (tracks, t) => {
    return formatForHuman(sumBy(tracks, 'duration'), t);
}

/* Gives back an array if wasn't or just the array */
export const makeArray = (itemArr) => ([]).concat(itemArr)

export const ItemsShareSameValue = (array, key) => {
    if (array.length === 1) return true
    return new Set(array.map(item => item[key])).size === 1
}

/* Map data to object for react select */
export const mapResponseToValuesAndLabels = (data) => ({
    value: data.name,
    label: data.name,
});

export const previewFile = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const acceptsImageDrop = (event) => {
    if (!event.dataTransfer || !event.dataTransfer.items) {
        return false
    }

    if (event.dataTransfer.items.length !== 1) {
        return false
    }

    if (event.dataTransfer.items[0].kind !== 'file') {
        return false
    }

    return VALID_IMAGE_TYPES.includes(event.dataTransfer.items[0].type)
}

export const showLoader = () =>
{
    document.getElementById('loader').classList.add('flex');
}

export const hideLoader = () =>
{
    document.getElementById('loader').classList.remove('flex');
}

export const getThumbnails = (items) => {
    const itemsWithCover = items.filter(item => item.cover);
    const sampleCovers = sampleSize(itemsWithCover, 20).map(item => item.cover)
    return sampleCovers.slice(0, 4);
}

export const seekUpdate = ( position, max ) => {
    const min = 0;
    const range = document.getElementById('seekbar');
    const bubble = document.getElementById('bubble');
    const newVal = Number(((position - min) * 100) / (max - min));
    bubble.innerHTML = formatToHis(position);

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    range.style.backgroundSize = newVal + '% 100%'
}

export const reorderArr = (i, arr) => {
    return [...arr.slice(i), ...arr.slice(0,i)];
}
