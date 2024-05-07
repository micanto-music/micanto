import React from "react";
import defaultCover from "../../assets/img/logo.svg";
import {getThumbnails} from "../../helper/helper";

export default function HeaderThumbnails({items}) {

    const thumbs = () => {
        if(!items) return [defaultCover];

        return items.length === 0
            ? [defaultCover]
            : (items.length < 4 ? [items[0].cover ? items[0].cover :defaultCover] : getThumbnails(items))
    }

    const tiles = thumbs().length < 4 ? 'tile-1' : 'tile-4';

    return (
        <div className={`thumbnail-wrapper w-[150px] mr-3 ${tiles}`}>
            {thumbs().map((thumb, i) => (
            <img
                key={i}
                className=""
                src={thumb}
            />
            ))}
        </div>
    );
}
