import SmallBar from "./Track/SmallBar";
import React from "react";
import usePlayer from "../store/playerStore";
import {useTranslation} from "react-i18next";
import {useShallow} from "zustand/react/shallow";
const Queue = () => {
    const [queue] = usePlayer(useShallow(state => [state.queue]));

    const [t] = useTranslation();
    return(

        <div className="mt-6">
            <h3>{t('sidebar.queue.headline')}</h3>
            <ul>
                {queue?.map((track, i) => (
                    <SmallBar
                        key={track.id}
                        track={track}
                    />
                ))}
            </ul>
        </div>

    );
}

export default Queue;
