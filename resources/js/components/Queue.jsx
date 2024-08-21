import SmallBar from "./Track/SmallBar";
import React from "react";
import usePlayer from "../store/playerStore";
import {useTranslation} from "react-i18next";
import {useShallow} from "zustand/react/shallow";
import useApp from "../store/appStore";
const Queue = () => {
    const [queue] = usePlayer(useShallow(state => [state.queue]));
    const [queueCollapsed] = useApp(useShallow(state => [state.queueCollapsed]));

    const [t] = useTranslation();
    return(
        <div className={`sidebar w-[320px] border-l ${queueCollapsed ? `hidden`: ``}`}>
            <div className="mt-2">
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
        </div>
    );
}

export default Queue;
