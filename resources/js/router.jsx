import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Login from './pages/Login';
import Artist from './pages/Artist';
import Artists from './pages/Artists';
import Tracks from './pages/Tracks';
import Start from './pages/Start';
import ProtectedLayout from './layouts/ProtectedLayout';
import GuestLayout from './layouts/GuestLayout';
import Albums from "./pages/Albums";
import Album from "./pages/Album";
import Search from "./pages/Search";
import Queue from "./pages/Queue";
import Playlist from "./pages/Playlist";
import Settings from "./pages/Settings";
import Setup from "./pages/Setup";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
        ],
    },
    {
        path: '/setup',
        element: <Setup />,
    },
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: '/artist/:id',
                element: <Artist />,
            },
            {
                path: '/artists',
                element: <Artists />,
            },
            {
                path: '/home',
                element: <Start />,
            },{
                path: '/search',
                element: <Search />,
            },
            {
                path: '/tracks',
                element: <Tracks />,
            },
            {
                path: '/albums',
                element: <Albums />,
            },
            {
                path: '/album/:id',
                element: <Album />,
            },
            {
                path: '/queue',
                element: <Queue />,
            },
            {
                path: '/settings',
                element: <Settings />,
            },
            {
                path: '/favorites',
                element: <Favorites />,
            },
            {
                path: '/playlist/:id',
                element: <Playlist />,
            },
            {
                path: '*',
                element: <NotFound />
            }
        ],
    },
]);

export default router;
