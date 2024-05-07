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

    return (
        <div className="hidden sm:flex flex-row items-center">
            <div className="relative w-full mt-5">
                <div className="input-wrapper">
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
                    <output id="bubble"></output>
                </div>
            </div>
        </div>
    );
};

export default Seekbar;
