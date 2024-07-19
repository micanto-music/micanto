import React from "react";
import {useTranslation} from "react-i18next";
import usePlayer from "../store/playerStore";
export default function PlayAllBtn({context}) {
    const [t] = useTranslation();
    const [setShuffle, playContext] = usePlayer(state => [state.setShuffle, state.playContext]);
    const playAll = async () => {
        await setShuffle(false);
        context['shuffle'] = false;
        await playContext(context,null);
    };

    const playAllShuffle = async () => {
        await setShuffle(true);
        context['shuffle'] = true;
        await playContext(context,null, true);
    };

    return (
        <>
        <button onClick={playAll} className="btn btn-primary">{t('playall')}</button>
        <button onClick={playAllShuffle} className="btn btn-primary ml-2">{t('shuffleall')}</button>
        </>
    )
}
