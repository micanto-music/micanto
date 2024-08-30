import {LuHeart} from "react-icons/lu";
import React, {useState} from "react";
import { Tooltip } from 'react-tooltip';
import {useTranslation} from "react-i18next";
import {PlayerAPI} from "../api/PlayerAPI";
export default function ({track}) {

    const [liked, setLiked] = useState(track.liked);
    const [t] = useTranslation();
    const onClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setLiked(!liked);
        PlayerAPI.like(track?.id);
    }

    return (
        <>
        <button
            className={`like-heart ${ liked ? `liked` : ``}`} onClick={onClick}
            data-tooltip-id="like-tooltip" data-tooltip-content={liked ? t('tooltips.unlike') : t('tooltips.like')} data-tooltip-place="top"
        >
            <LuHeart size="24" color="#898989"/>
        </button>
        </>
    );

}
