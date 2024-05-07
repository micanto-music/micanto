import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { TbRepeat, TbRepeatOff, TbRepeatOnce, TbArrowsShuffle } from "react-icons/tb";
import {useIsPlaying} from "../../hooks/useIsPlaying";

const Controls = ({ isPlaying, repeatMode, shuffle, playHandler,pauseHandler, nextSong, prevSong, repeatClickHandler, shuffleClickHandler }) => {
    const { playing, bufferingDuringPlay } = useIsPlaying();
    return(

        <div className="flex items-center justify-around w-full my-4">

            {repeatMode === 'queue' &&
                <TbRepeat size={20} onClick={repeatClickHandler} className="cursor-pointer active" />
            }

            {repeatMode === 'track' &&
                <TbRepeatOnce size={20} onClick={repeatClickHandler} className="cursor-pointer active" />
            }

            {repeatMode === 'off' &&
                <TbRepeatOff size={20} onClick={repeatClickHandler} className="cursor-pointer" />
            }

            <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={prevSong} />
            {playing ? (
                <BsFillPauseFill size={45} color="#FFF" onClick={pauseHandler} className="cursor-pointer" />
            ) : (
                <BsFillPlayFill size={45} color="#FFF" onClick={playHandler} className="cursor-pointer" />
            )}
            <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={nextSong} />
            <TbArrowsShuffle size={20} onClick={shuffleClickHandler} className={`${shuffle ? 'active' : ''}`} />
        </div>
    );
}


export default Controls;
