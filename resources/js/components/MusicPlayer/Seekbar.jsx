import React, { useMemo } from "react";
import { formatToHis } from "../../helper/helper";
import { useProgress } from "../../hooks/useProgress";

const Seekbar = ({
    minimumValue = 0,
    onValueChange
}) => {
    const { position, duration } = useProgress();

    const percentage = useMemo(() => {
        if (duration === 0) return 0;
        return ((position - minimumValue) * 100) / (duration - minimumValue);
    }, [position, duration, minimumValue]);

    const getTime = (time) => {
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = Math.floor(time % 60);
        if (h > 0) {
            return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const trackStyle = {
        backgroundSize: `${percentage}% 100%`
    };

    const bubbleStyle = {
        left: `calc(${percentage}% + (${8 - percentage * 0.15}px))`
    };

    return (
        <div className="flex flex-1 pl-2 pr-4">
            <div className="relative w-full">
                <div className="input-wrapper items-center flex justify-between">
                    <p className="text-gray-400 text-sm mr-2">
                        {getTime(position)}
                    </p>
                    <input
                        type="range"
                        id="seekbar"
                        step="any"
                        value={position}
                        min={minimumValue}
                        max={duration}
                        onChange={onValueChange}
                        style={trackStyle}
                        className="md:block rounded-lg w-full input-range"
                    />
                    <p className="text-gray-400 text-sm ml-2">
                        {getTime(duration)}
                    </p>
                    <output 
                        id="bubble"
                        style={bubbleStyle}
                    >
                        {formatToHis(position)}
                    </output>
                </div>
            </div>
        </div>
    );
};

export default Seekbar;
