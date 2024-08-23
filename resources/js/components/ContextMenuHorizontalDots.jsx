import { BiDotsHorizontalRounded } from "react-icons/bi";

import {useContextMenu} from "react-contexify";
import React from "react";
import {Tooltip} from "react-tooltip";
import {useTranslation} from "react-i18next";
export default function ContextMenuHorizontalDots({menu, data, size= 16})
{
    const { show } = useContextMenu();
    const [t] = useTranslation();
    function displayMenu(e){
        e.preventDefault();
        e.stopPropagation();
        show({
            event: e,
            props: data,
            id: menu
        });
    }

    return(
        <>
            <button
                className="btn btn-round ml-2" onClick={(e) => displayMenu(e)}
                data-tooltip-id="context-tooltip" data-tooltip-content={t('tooltips.context')} data-tooltip-place="top"
            >
                <BiDotsHorizontalRounded color="#898989" size={size}/>
            </button>
        </>
    );

}
