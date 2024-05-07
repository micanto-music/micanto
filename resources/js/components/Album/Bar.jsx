import React from "react";
import defaultCover from "../../assets/img/logo.svg";
import {Link} from "react-router-dom";
import Subline from "../Subline";
import PlayAllBtn from "../PlayAllBtn";

export default function Bar({album, tracks}){
    const context = {
        type: 'album',
        id: album.id
    }
    return (
        <div className="flex mb-6">
            <div className="w-[140px] mr-3">
                <Link to={`/album/${album?.id}`}>
                    <img
                        src={album?.cover ?  album?.cover : defaultCover}
                        alt={album?.name}
                        className="w-full h-full rounded-lg" />
                </Link>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex flex-col flex-1">
                    <p className="font-semibold text-2xl text-white truncate">
                        <Link to={`/album/${album?.id}`}>
                            {album.name}
                        </Link>
                    </p>
                    <Subline tracks={tracks} album={album}/>
                </div>
                <div className="mt-auto">
                    <PlayAllBtn context={context}/>
                </div>
            </div>

        </div>
    );

}
