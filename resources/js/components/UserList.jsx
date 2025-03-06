import User from "./User";
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {PlayerAPI} from "../api/PlayerAPI";
import {FiPlusSquare} from "react-icons/fi";
import {useModal} from "../hooks/useModal";
import {useContextMenu} from "react-contexify";
import UserMenu from "./ContextMenus/UserMenu";
import useTrackStore from "../store/TrackStore";
import useUserStore from "../store/UserStore";
import ActivityIndicator from "./ActivityIndicator";
export default function UserList() {
    const [items, setItems] = useUserStore(state => [state.items, state.setItems]);
    const [t] = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const { onOpen: openAddUser } = useModal('User-Add');
    const MENU_ID = 'user-menu';
    const { show } = useContextMenu({
        id: MENU_ID
    });

    function displayMenu(e, data){
        e.preventDefault();

        show({
            event: e,
            props: data
        });
    }

    useEffect(() => {
        setIsLoading(true);
        PlayerAPI.getUsers().then((user) => {
            // response handling
            setItems(user.data)
            setIsLoading(false);
        })
    }, []);


    if (isLoading) {
        return <ActivityIndicator />;
    }

    return(
        <div className="pl-5 pr-2">
            <h2 className="mt-4 mb-2 flex">{t('userList.title')} <button className="hover:text-cyan-400 ml-2" onClick={openAddUser}><FiPlusSquare/></button></h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                {items?.map((user, i) => (
                    <User user={user} key={user.id} displayMenu={displayMenu}/>
                ))}
            </div>
            <UserMenu id={MENU_ID}/>
        </div>
    );

}
