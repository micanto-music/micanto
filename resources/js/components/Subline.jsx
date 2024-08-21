import {Link} from "react-router-dom";
import React from "react";
import {getTracklistLength} from "../helper/helper";
import {useTranslation} from "react-i18next";

export default function Subline({tracks, album, albums, trackcount}) {
    const [t] = useTranslation();

    if(!trackcount) {
        trackcount = tracks?.length;
    }

    return (
        <div className="subline mt-1">
            {album &&
                <>
                    {album?.artist?.id && album?.artist?.id != 2 &&
                        <Link key={`artist${album?.artist.id}`} to={`/artist/${album?.artist.id}`}>
                            {album?.artist.name} &middot;
                        </Link>
                    }

                    {album?.artist?.id && album?.artist?.id == 2 &&
                        <>{t('artist.compilation')} &middot;</>
                    }

                    {album?.year && <span> {album?.year}</span>}
                </>
            }
            {albums && <span> {albums?.length} {t('albums')}</span>}

            <span>{albums && <>&middot;</>} {trackcount} {t('subline.tracks')}</span>
            <span>&middot; {getTracklistLength(tracks, t)}</span>
        </div>
    );

}
