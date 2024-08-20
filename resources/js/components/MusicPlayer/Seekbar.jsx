import React, { useEffect } from "react";
import {formatToHis, seekUpdate} from "../../helper/helper";
import {useProgress} from "../../hooks/useProgress";


const Seekbar = ({
    minimumValue,
    onValueChange
}) => {

    const { position, duration } = useProgress();
    if(position) {
        seekUpdate(position, duration);
    }

    const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

    return (
        <div className="flex flex-1 pl-2 pr-4">
            <div className="relative w-full">
                <div className="input-wrapper input-wrapper items-center flex justify-between">
                    <p className="text-gray-400 text-sm mr-2">{position === 0 ? '0:00' : getTime(position)}</p>
                    <input
                        type="range"
                        id="seekbar"
                        step="any"
                        value={position}
                        min={minimumValue}
                        max={duration}
                        onChange={onValueChange}
                        className="md:block rounded-lg w-full input-range"
                    />
                    <p className="text-gray-400 text-sm ml-2">{duration === 0 ? '0:00' : getTime(duration)}</p>
                    <output id="bubble"></output>
                </div>
            </div>
        </div>
    );
};

export default Seekbar;
