import {BsFillPlayCircleFill, BsFillPauseCircleFill} from "react-icons/bs";
import React from "react";
import usePlayer from "../../store/playerStore";
import {sameContext} from "../../helper/helper";
import {useIsPlaying} from "../../hooks/useIsPlaying";
import MicantoPlayer from "../../services/MicantoPlayer";

export default function CompactHeader({title, context}) {
    const [setShuffle, playContext, musicContext] = usePlayer(state => [state.setShuffle, state.playContext, state.musicContext]);
    const { playing } = useIsPlaying();

    const contextIsSame = sameContext(musicContext, context);

    const resumeHandler = async () => {
        await MicantoPlayer.play();
    }

    const playHandler = async() => {
        if(contextIsSame) {
            await resumeHandler();
        } else {
            await setShuffle(true);
            if(!Object.hasOwn(context, 'options')) context.options = {};
            context.options.shuffle = true;
            await playContext(context,null, true);
        }
    }

    const pauseHandler = async () => {
        await MicantoPlayer.pause();
    }

    return (
        <div id="compact-header" className="sticky flex px-2 pl-5 w-full">
            <div className="flex h-[50px] items-center">
                {playing && contextIsSame
                    ? <BsFillPauseCircleFill size={30} color="#ff69b4" onClick={pauseHandler} className="cursor-pointer mr-3" />
                    : <BsFillPlayCircleFill size={30} color="#ff69b4" onClick={playHandler} className="cursor-pointer mr-3" />
                }
                <h4>{title}</h4>
            </div>
        </div>
    )
}
