import {TbLayoutSidebarRightCollapse, TbLayoutSidebarRightExpand} from "react-icons/tb";
import {Tooltip} from "react-tooltip";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {PlayerAPI} from "../api/PlayerAPI";
import useApp from "../store/appStore";
import {useShallow} from "zustand/react/shallow";
import {LuLayoutList} from "react-icons/lu";

export default function() {
    const [toggleQueueSidebar, queueCollapsed] = useApp(useShallow(state => [state.toggleQueueSidebar, state.queueCollapsed]));
    const [t] = useTranslation();

    const onClick = () => {
        toggleQueueSidebar();
    }

    return (
        <>
            <button className="p-2"
                    onClick={onClick}
                    data-tooltip-id="toggle-sidebar-tooltip" data-tooltip-content={ queueCollapsed ? t('tooltips.showQueue') :  t('tooltips.hideQueue') }
                    data-tooltip-place="top"
            >
                {queueCollapsed && <TbLayoutSidebarRightExpand size="28" color="#898989" />}
                {!queueCollapsed &&  <TbLayoutSidebarRightCollapse size="28" color="#898989"/>}
            </button>
            <Tooltip id="toggle-sidebar-tooltip"/>
        </>
    )
}
