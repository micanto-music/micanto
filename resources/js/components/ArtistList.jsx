import {Link} from "react-router-dom";
import React from "react";

const ArtistList = ({ artists, noLink = false }) => {
    return (
        <>
            {artists?.map((artist, i) => [
                artist.id != 2 && i > 0 && ", ",
                !noLink && artist.id != 2 &&
                <Link key={`artist${artist.id}`} to={`/artist/${artist.id}`}>
                    {artist.name}
                </Link>,
                noLink && artist.id != 2 && <span key={`artist${artist.id}`}>{artist.name}</span>
            ])}

            {artists?.length == 0 &&
                'Unknown Artist'
            }
        </>
    );
}

export default ArtistList;

