import React from "react";
import {useTranslation} from "react-i18next";
import logo from "../assets/img/logo.svg";
export default function NotFound()
{
    const [t] = useTranslation();
    return (
        <div className="flex items-center justify-center flex-1">
            <div className="text-center">
                <div className="fourohfour flex items-center justify-center mb-8">
                    <span>
                        4
                    </span>
                    <span>
                        <img width="200px" src={logo} alt=""/>
                    </span>
                    <span>
                        4
                    </span>
                </div>

                <h2>{t('fourohfour.title')}</h2>
                {t('fourohfour.text')}
            </div>
        </div>
    )
}
