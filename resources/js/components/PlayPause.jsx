import React from 'react';
import { AiFillPlayCircle,AiFillPauseCircle } from "react-icons/ai";

const PlayPause = ({ playContext,isPlaying,currentTrack,track, size = 35, context = {} }) => (isPlaying && currentTrack?.id === track.id ? (
    <AiFillPauseCircle
        size={size}
        className="text-gray-300"
        onClick={() => {if(playTrack) {playContext(context, track)}}}
    />
) : (
    <AiFillPlayCircle
        size={size}
        className=""
        onClick={() => {if(playTrack) {playContext(context, track)}}}
    />
));

export default PlayPause;
