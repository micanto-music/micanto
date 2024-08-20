import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';
import { TbRepeat, TbRepeatOff, TbRepeatOnce, TbArrowsShuffle } from "react-icons/tb";
import {useIsPlaying} from "../../hooks/useIsPlaying";

const Controls = ({ isPlaying, repeatMode, shuffle, playHandler,pauseHandler, nextSong, prevSong, repeatClickHandler, shuffleClickHandler }) => {
    const { playing, bufferingDuringPlay } = useIsPlaying();
    return(

        <div className="flex items-center justify-around controls mx-4">

            {playing ? (
                <BsFillPauseCircleFill size={38} color="#ff69b4" onClick={pauseHandler} className="cursor-pointer" />
            ) : (
                <BsFillPlayCircleFill size={38} color="#ff69b4" onClick={playHandler} className="cursor-pointer" />
            )}

            <MdSkipPrevious size={30} color="#898989" className="cursor-pointer" onClick={prevSong} />

            <MdSkipNext size={30} color="#898989" className="cursor-pointer" onClick={nextSong} />

            <TbArrowsShuffle size={20} onClick={shuffleClickHandler} color="#898989" className={`cursor-pointer ${shuffle ? 'active' : ''}`} />

            {repeatMode === 'queue' &&
                <TbRepeat size={20} onClick={repeatClickHandler} className="cursor-pointer active" />
            }

            {repeatMode === 'track' &&
                <TbRepeatOnce size={20} onClick={repeatClickHandler} className="cursor-pointer active" />
            }

            {repeatMode === 'off' &&
                <TbRepeatOff size={20} onClick={repeatClickHandler} className="cursor-pointer" />
            }
        </div>
    );
}


export default Controls;
