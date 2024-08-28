import React, {useState, useEffect, useRef, useCallback} from 'react';
import usePlayer from "../store/playerStore";
import SmallBar from "../components/Track/SmallBar";
import Header from "../components/Header/Header";
import Scroll from "../components/Scroll";
import HeaderTitle from "../components/Header/HeaderTitle";
import {useTranslation} from "react-i18next";
import HeaderThumbnails from "../components/Header/HeaderThumbnails";
import {useShallow} from "zustand/react/shallow";
import Subline from "../components/Subline";
export default function Queue() {
    const [queue] = usePlayer(useShallow(state => [state.queue]));
    const [t] = useTranslation();
    return (
        <>
            <Header title={t('queue')}>
                <HeaderThumbnails items={queue}/>
                <div className="flex-col items-start">
                    <HeaderTitle>{t('queue')}</HeaderTitle>
                    <Subline tracks={queue}/>
                </div>
            </Header>
            <Scroll>
                <div className="pl-5 pr-2">
                    <ul>
                        {queue?.map((track, i) => (
                            <SmallBar
                                key={track.id}
                                track={track}
                                iteration={i}
                                context={{
                                    type: 'queue',
                                    id: null
                                }}
                            />
                        ))}
                    </ul>
                </div>
            </Scroll>
        </>
);
}
