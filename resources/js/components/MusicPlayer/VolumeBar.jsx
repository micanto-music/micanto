import React, {useEffect, useState} from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import {TbVolume, TbVolume2, TbVolume3} from "react-icons/tb";
import useOutsideClick from "../../hooks/useOutsideClick";
import MicantoPlayer from "../../services/MicantoPlayer";

const VolumeBar = () => {
    const [volume, setVolume] = useState(0.3);
    const [volumeOpen, setVolumeOpen] = useState(false);
    const handleClickOutside = () => {
        setVolumeOpen(false);
    }

    const ref = useOutsideClick(handleClickOutside);

    const handleVolume = ( volume ) => {
        setVolume(volume);
        MicantoPlayer.setVolume(volume);
        document.getElementById('volume-slider').style.backgroundSize = volume * 100 + '% 100%'
    }

    const toggleVolume = () => {
        setVolumeOpen(!volumeOpen);
    }

    useEffect(() => {
        document.getElementById('volume-slider').style.backgroundSize = 0.3 * 100 + '% 100%'
    }, []);

    return (
        <div ref={ref} className="volume-wrapper flex">
            <button onClick={toggleVolume}>
                {volume <= 1 && volume > 0.5 && <TbVolume color="#898989" className="w-6 h-6"/>}
                {volume <= 0.5 && volume > 0 && <TbVolume2 color="#898989" className="w-6 h-6"/>}
                {volume == 0 && <TbVolume3  color="#898989" className="w-6 h-6"/>}
            </button>
            <div className={`volume-dropdown absolute ${!volumeOpen ? 'hidden' : ''}`}>
                <div className="input-range-wrapper">
                    <input
                        value={volume} step="any" type="range" min="0" max="1" id="volume-slider"
                        onChange={(event) => handleVolume(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
;

export default VolumeBar;
