import {BsFillPlayCircleFill} from "react-icons/bs";
import React from "react";
import usePlayer from "../../store/playerStore";

export default function CompactHeader({title, context}) {
    const [setShuffle, playContext] = usePlayer(state => [state.setShuffle, state.playContext]);
    const playHandler = async() => {
        await setShuffle(true);
        context['options']['shuffle'] = true;
        await playContext(context,null, true);
    }

    return (
        <div id="compact-header" className="sticky flex px-2 pl-5 w-full">
            <div className="flex h-[50px] items-center">
                <BsFillPlayCircleFill size={30} color="#ff69b4" onClick={playHandler} className="cursor-pointer mr-3" />
                <h4>{title}</h4>
            </div>
        </div>
    )
}
