import React, {useEffect, useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import AudioPlayer from '../components/AudioPlayer';
import LoadingBar from 'react-top-loading-bar'
import {PlayerAPI} from "../api/PlayerAPI";
import usePlayer from "../store/playerStore";
import { useShallow } from 'zustand/react/shallow'
import ModalContainer from "../components/Modal/ModalContainer";
import MicantoPlayer from "../services/MicantoPlayer";

export default function DefaultLayout() {
    const { user, setUser } = useAuth();
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    // check if user is logged in or not from server
    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get('/api/user');
                if (resp.status === 200) {
                    setUser(resp.data.data);
                }
            } catch (error) {
                if (error.response.status === 401) {
                    localStorage.removeItem('user');
                    window.location.href = '/';
                }
            }
        })();
    }, []);

    // if user is not logged in, redirect to login page
    if (!user) {
        return <Navigate to="/" />;
    }

    const [ setFromSession ] = usePlayer(useShallow((state) => [state.setFromSession]));

    useEffect(() => {
        let unmounted = false;
        (async () => {
            await MicantoPlayer.setupPlayer();
            if (unmounted) return;

            const initData = await PlayerAPI.getInitialData();
            await setFromSession(initData);
            setIsPlayerReady(true);
        })();
        return () => {
            unmounted = true;
        };
    }, []);

    // TrackPlayer.registerPlaybackService(() => require('./service'));

    if(!isPlayerReady) {
        return (<>Loading</>);
    }

    return (
        <>
        <div className="h-screen flex flex-col justify-end">
            <div className="main-wrapper">
                <Sidebar />
                <main className="main-content">
                    <section className="main-section">
                        <Outlet />
                    </section>
                </main>
                <AudioPlayer />
            </div>
        </div>
        <ModalContainer />
        </>
    );
}
