import {Item, Menu, Separator, Submenu} from "react-contexify";
import React from "react";
import {useTranslation} from "react-i18next";
import {useModal} from "../../hooks/useModal";
import usePlayer from "../../store/playerStore";

export default function UserMenu({id}) {
    const [t] = useTranslation();
    const { onOpen: openEditUser } = useModal('User-Edit');
    const { onOpen: openDeleteUser } = useModal('User-Delete');
    const [playContext] = usePlayer(state => [state.playContext]);

    const handleItemClick = ({ id, event, props }) => {
        switch (id) {
            case "edit":
                openEditUser(event,props);
                break;
            case "delete":
                openDeleteUser(event,props);
                break;
            default:
                break;
        }
    }



    return(
        <Menu id={id}>
            <Item id="edit" onClick={handleItemClick}>{t('context.edit')}</Item>
            <Separator />
            <Item id="delete" onClick={handleItemClick}>{t('context.delete')}</Item>
        </Menu>
    );

}
