import React from "react";
import defaultCover from "../../assets/img/logo.svg";
import {Link} from "react-router-dom";
import ArtistList from "../ArtistList";
import {BaseCard} from "../BaseCard";
import {useTranslation} from "react-i18next";
import {useDraggable} from "../../hooks/useDragAndDrop";

const Card = ({ artist, width, showType, displayMenu }) => {
    const [t] = useTranslation();
    const { startDragging } = useDraggable('artist');
    return (
        <BaseCard width={width}>
            <div
                onContextMenu={(e) => displayMenu(e, artist)}
                onDragStart={(e) => startDragging(e, artist)}
                draggable="true"
            >
                <Link to={`/artist/${artist?.id}`}>
                    <img
                        alt="song_img"
                        src={artist?.image ? artist?.image : defaultCover}
                        className="w-full rounded-lg card-cover"/>

                    <div className="mt-4 flex flex-col">
                        <p className="font-semibold text-lg text-white truncate">
                            {artist.name}
                        </p>
                        <p className="text-sm truncate text-gray-300 mt-1">
                            {showType && <>{t('artists')}</>}
                        </p>
                    </div>
                </Link>
            </div>
        </BaseCard>
);

}

export default Card;
