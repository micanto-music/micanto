import {Link} from "react-router-dom";
import ArtistList from "../ArtistList";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Tile({playlist}) {
    const [t] = useTranslation();
    return (
        <Link key={`playlist${playlist.id}`} to={`/playlist/${playlist.id}`} className="flex-1 playlist-tile">
            <div className="tiles flex gap-2 mb-6 ">
                {playlist?.covers?.map((cover, i) => (
                    <div className="tile" key={`playlisttile-${i}`}>
                        <img className="w-[40px] rounded-lg"
                             src={cover}
                             alt=""/>
                    </div>
                ))}

                {playlist.tracks_count - 2 > 0 &&
                    <div className="tile">
                        + {playlist.tracks_count - playlist?.covers?.length}
                    </div>
                }
            </div>

            <h4 className="truncate" title={playlist.name}>{playlist.name}</h4>
            <p className="text-sm truncate text-gray-300 mt-1">
                <ArtistList artists={playlist?.artists} noLink={true}/>
            </p>
        </Link>
    )
}
