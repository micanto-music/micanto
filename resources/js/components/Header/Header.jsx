import React, {useEffect, useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {NavLink} from "react-router-dom";
import {PiGearLight} from "react-icons/pi";
import profilePicture from "../../assets/img/user.png";
import {useModal} from "../../hooks/useModal";
import ProfileMenu from "../ContextMenus/ProfileMenu";
import {Dropdown} from "../Dropdown";
import {TbReload, TbVolume, TbVolume2, TbVolume3} from "react-icons/tb";
import {useTranslation} from "react-i18next";
import {PlayerAPI} from "../../api/PlayerAPI";
import {toast} from "react-toastify";
import MicantoPlayer from "../../services/MicantoPlayer";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function Header({title, children}) {
    const { user} = useAuth();
    const { onOpen: openEditUser } = useModal('User-Edit');
    const [syncing, setSyncing] = useState(false);
    document.title = title + ' - micanto';
    const notify = (text, type) => toast(text, {type:'success'});
    const userImage = user?.image ? user?.image :profilePicture;
    const MENU_ID = 'profile-menu';
    const [t] = useTranslation();
    const [volume, setVolume] = useState(0.3);
    const [volumeOpen, setVolumeOpen] = useState(false);

    const handleClickOutside = () => {
        setVolumeOpen(false);
    }

    const ref = useOutsideClick(handleClickOutside);

    const syncHandler = () => {
        setSyncing(true);

        PlayerAPI.syncTracks().then((res) => {
            setSyncing(false);
            notify(res.updated +' ' + t('toast.synced'));
        });
    }

    const handleVolume = ( volume ) => {
        setVolume(volume);
        MicantoPlayer.setVolume(volume);
        document.getElementById('volume-slider').style.backgroundSize = volume * 100 + '% 100%'
    }

    const toggleVolume = () => {
        setVolumeOpen(!volumeOpen);
    }

    useEffect(() => {
        document.getElementById('volume-slider').style.backgroundSize = 0.3 * 100 + '% 100%'
    }, []);

    return (
        <>
        <header className="items-start">
            <div className="flex items-end">
                {children}
            </div>
            <div className="top-navi flex">
                <div ref={ref} className="relative mr-3 flex justify center">
                    <button onClick={toggleVolume}>
                        {volume <= 1 && volume > 0.5 && <TbVolume className="w-7 h-7" />}
                        {volume <= 0.5 && volume > 0 && <TbVolume2 className="w-7 h-7" />}
                        {volume == 0 && <TbVolume3 className="w-7 h-7" />}
                    </button>
                    <div className={`volume-dropdown absolute ${!volumeOpen ? 'hidden' : ''}`}>
                        <div className="input-range-wrapper">
                        <input
                            value={volume} step="any" type="range" min="0" max="1" id="volume-slider"
                            onChange={(event) => handleVolume(event.target.value)}
                        />
                        </div>
                    </div>
                </div>

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
                    <img src={userImage} className="w-[28px] rounded-full"/>
                </Dropdown>
            </div>

        </header>
        <ProfileMenu id={MENU_ID}/>
        </>
    );
}

