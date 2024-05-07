import { BiDotsHorizontalRounded } from "react-icons/bi";

import {useContextMenu} from "react-contexify";
import React from "react";
export default function ContextMenuHorizontalDots({menu, data})
{
    const { show } = useContextMenu();
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
            <button className="btn btn-round ml-2" onClick={(e) => displayMenu(e)}>
                <BiDotsHorizontalRounded />
            </button>
        </>
    );

}
