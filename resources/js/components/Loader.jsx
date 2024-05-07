import React from "react";
import {useTranslation} from "react-i18next";

export default function Loader()
{
    const [t] = useTranslation();
    return (
        <div id="loader" className="flex">
            <div className="loader-inner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                &nbsp; {t('pleasewait')}
            </div>
        </div>
    );
}
