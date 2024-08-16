import React, {useEffect, useRef, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from "../assets/img/logo.svg"
import usePlayer from "../store/playerStore";
import {links} from "../assets/constants";
import PlaylistItem from "./Playlist/Item";
import {useTranslation} from "react-i18next";
import {useShallow} from "zustand/react/shallow";
import {FiPlusSquare} from "react-icons/fi";
import {useModal} from "../hooks/useModal";
import {useContextMenu} from "react-contexify";
import PlaylistMenu from "./ContextMenus/PlaylistMenu";

const NavLinks = ({ handleClick, t }) => (
    <>
        <div className="flex items-center">
            <img src={logo} alt="logo" className="h-14 object-contain" /> <span className="logotext p-2 text-2xl"><strong>mi</strong>canto</span>
        </div>

        <div className="sidebar-navigation mt-6">
            {links.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    className="flex flex-row hover:text-cyan-400"
                    title={item.name}
                    onClick={() => handleClick && handleClick()}
                >
                    <span className="nav-icon"><item.icon className="w-6 h-6" /></span>
                    <span className="p-2">{t(`menu.${item.name}`)}</span>
                </NavLink>
            ))}
        </div>
    </>
);

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [playlists] = usePlayer(useShallow(state => [state.playlists]));
    const [t] = useTranslation();
    const { onOpen: openAddPlaylist } = useModal('Playlist-Add');
    const MENU_ID = "playlist-menu";
    const [minWidth, maxWidth, defaultWidth] = [85, 350, 250];
    const [width, setWidth] = useState(
        parseInt(localStorage.getItem("sidebarWidth")) || defaultWidth
    );
    const [collapse, setCollapse] = useState(
        localStorage.getItem("sidebarCollapsed") === 'true'
    );

    const isResized = useRef(false);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            if (!isResized.current) {
                return;
            }

            setWidth((previousWidth) => {
                const newWidth = previousWidth + e.movementX / 2;

                const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;
                if(newWidth < 210) {
                    setCollapse(true);
                } else {
                    setCollapse(false);
                }

                return isWidthInRange ? newWidth : previousWidth;
            });
        });

        window.addEventListener("mouseup", () => {
            isResized.current = false;
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebarWidth", width);
    }, [width]);

    useEffect(() => {
        localStorage.setItem("sidebarCollapsed", collapse);
    }, [collapse]);

    const { show } = useContextMenu({
        id: MENU_ID
    });

    function displayMenu(e, playlist){
        e.preventDefault();
        // put whatever custom logic you need
        // you can even decide to not display the Menu
        show({
            event: e,
            props:playlist
        });
    }

    return (
        <>
        <>
            <nav className={`md:block hidden sidebar ${collapse ? `collapsed` : ``}`} style={{width: `${width}px`}}>
                <NavLinks t={t}/>

                <h3 className="mt-6 flex justify-between">
                    <span className="sidebar-headline">{t('sidebar.playlists.headline')}</span>
                    <button className="hover:text-cyan-400" onClick={openAddPlaylist}><FiPlusSquare/></button>
                </h3>
                <div className="sidebar-navigation">
                    {playlists && playlists.map((playlist) => (
                        <PlaylistItem displayMenu={displayMenu} key={playlist.id} playlist={playlist}/>
                    ))}
                </div>
            </nav>
            <PlaylistMenu id={MENU_ID}/>
        </>
        <div
            className="cursor-col-resize"
            onMouseDown={() => {
                isResized.current = true;
            }}
        ></div>
</>
)
    ;
};

export default Sidebar;
