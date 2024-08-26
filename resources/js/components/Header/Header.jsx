import React, {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {NavLink} from "react-router-dom";
import {PiGearLight} from "react-icons/pi";
import profilePicture from "../../assets/img/user.png";
import {useModal} from "../../hooks/useModal";
import ProfileMenu from "../ContextMenus/ProfileMenu";
import {Dropdown} from "../Dropdown";
import {TbReload} from "react-icons/tb";
import {useTranslation} from "react-i18next";
import {PlayerAPI} from "../../api/PlayerAPI";
import {toast} from "react-toastify";
import {RiUploadCloud2Line} from "react-icons/ri";

export default function Header({title, children}) {
    const { user} = useAuth();
    const { onOpen: openEditUser } = useModal('User-Edit');
    const [syncing, setSyncing] = useState(false);
    document.title = title + ' - micanto';
    const notify = (text, type) => toast(text, {type:'success'});
    const userImage = user?.image ? user?.image :profilePicture;
    const MENU_ID = 'profile-menu';
    const [t] = useTranslation();


    const syncHandler = () => {
        setSyncing(true);

        PlayerAPI.syncTracks().then((res) => {
            setSyncing(false);
            notify(res.updated +' ' + t('toast.synced'));
        });
    }

    return (
        <>
        <header className="items-start">
            <div className="flex items-end">
                {children}
            </div>
            <div className="top-navi flex">

                <NavLink
                    to="/upload"
                    className="mr-3"
                >
                    <RiUploadCloud2Line className="w-7 h-7" />
                </NavLink>

                <button
                    className={`mr-3 ${syncing ? 'syncing' : ''}`}
                    title={t('header.reloadLibrary')}
                    onClick={syncHandler}
                >
                    <TbReload className="w-7 h-7"/>
                </button>

                <NavLink
                    to="/settings"
                    className="mr-3"
                >
                    <PiGearLight className="w-7 h-7"/>
                </NavLink>

                <Dropdown id={MENU_ID} props={user}>
                    <img src={userImage} className="profile-img w-[28px] rounded-full"/>
                </Dropdown>
            </div>

        </header>
        <ProfileMenu id={MENU_ID}/>
        </>
    );
}

