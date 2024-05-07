import { TbDotsVertical } from "react-icons/tb";
import {useContextMenu} from "react-contexify";
import React from "react";
export default function ContextMenuDots({menu, data})
{
    const { show } = useContextMenu();
    function displayMenu(e){
        e.preventDefault();
        show({
            event: e,
            props: data,
            id: menu
        });
    }

    return(
        <>
            <button className="btn btn-round ml-2" onClick={(e) => displayMenu(e)}>
                <TbDotsVertical />
            </button>
        </>
    );

}
