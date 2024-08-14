import React from "react";
import defaultCover from "../../assets/img/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import ArtistList from "../ArtistList";
import {BaseCard} from "../BaseCard";
import {useDraggable} from "../../hooks/useDragAndDrop";
import {useTranslation} from "react-i18next";
import usePlayer from "../../store/playerStore";
import {useShallow} from "zustand/react/shallow";
import useSelection from "../../store/SelectionStore";
import useAlbumStore from "../../store/AlbumStore";
import {PiCheckBold} from "react-icons/pi";

const Card = ({ album, width, displayMenu, selectAble = false }) => {
    const { startDragging } = useDraggable('album');
    const [t] = useTranslation();
    const [updateItems] = useAlbumStore(state => [state.updateItems]);
    const navigate = useNavigate();

    const [selected,setSelected] = useSelection(useShallow(state => [state.selected, state.setSelected]));
    const selectHandler = () => {
        album.selected = !album.selected;
        let response = {albums:[album], removed:{albums:[]}}
        updateItems(response);
        setSelected(album);
    }
    if(selectAble) {

    }

    const onClickHandler = (e) => {
        if(e.currentTarget === e.target) {
            navigate(`/album/${album?.id}`);
        }
    }

    return (
        <BaseCard width={width} selectAble={selectAble} selected={album.selected ? 'selected': ''}>
            <div
                onContextMenu={(e) => displayMenu(e,album)}
                onDragStart={(e) => startDragging(e, album)}
                draggable="true"
            >
                <div className="relative image-wrap">
                    <Link to={`/album/${album?.id}`}>
                        <img
                             src={album?.cover ?  album?.cover : defaultCover}
                             alt={album?.name}
                             className="w-full rounded-lg" />
                    </Link>

                    <div className="card-shadow w-full rounded-lg" onClick={onClickHandler}>
                        {selectAble && <span className="card-selectable" onClick={selectHandler}>
                            <PiCheckBold />
                        </span>}
                    </div>
                </div>
                <div className="mt-4 flex flex-col">
                    <p className="font-semibold text-lg text-white truncate">
                        <Link to={`/album/${album?.id}`}>
                            {album.name}
                        </Link>
                    </p>
                    <p className="text-sm truncate text-gray-300 mt-1">
                        {album.year && <span>{album.year} &middot;&nbsp;</span>}
                        {album.is_compilation == true && t('artist.compilation')}
                        {!album.is_compilation && <ArtistList artists={[album?.artist]}/>}
                    </p>
                </div>
            </div>
        </BaseCard>
    );

}

export default Card;
