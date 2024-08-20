import axios from '../axios';
import {hideLoader} from "../helper/helper";
export const PlayerAPI = {

    updateUser: async function (id, formData) {
        const response = await axios.request({
            url: `/api/profile/${id}`,
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data;
    },

    addUser: async function (id, formData) {
        const response = await axios.request({
            url: `/api/users/add`,
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data;
    },

    getUsers: async function (page) {
        const response = await axios.request({
            url: `/api/users?page=${page}`,
            method: "GET"
        })

        return response.data;
    },

    getOverview: async function () {
        const response = await axios.request({
            url: `/api/overview`,
            method: "GET",
            // retrieving the signal value by using the property name
            //signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data;
    },

    getTracks: async function (sortField = 'tracks.title', order = 'asc',  page = 1, cancel = false,) {
        const response = await axios.request({
            url: `/api/tracks?page=${page}&sort=${sortField}&order=${order}`,
            method: "GET",
            // retrieving the signal value by using the property name
            //signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data;
    },

    updateTracks: async function (formData) {
        const response = await axios.request({
            url: `/api/tracks`,
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            // retrieving the signal value by using the property name
            //signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    },

    getInitialData: async function () {
        const response = await axios.request({
            url: `/api/getAll`,
            method: "GET"
        })

        return response.data;
    },

    getSessionTrack: async function () {
        const response = await axios.request({
            url: `/api/player/getSessionTrack`,
            method: "GET"
        })

        return response.data;
    },

    updateSession: async function (currentTime, currentTrack, musicContext) {
        const response = await axios.request({
            url: `/api/player/updateSession`,
            method: "POST",
            data: {
                time: currentTime,
                track: currentTrack,
                context: musicContext
            }
        })

        return response.data;
    },

    setPlayed: async function (currentTrack) {
        const response = await axios.request({
            url: `/api/player/played`,
            method: "POST",
            data: {
                track: currentTrack
            }
        })

        return response.data;
    },

    getAlbums: async function (page) {
        const response = await axios.request({
            url: `/api/albums?page=${page}`,
            method: "GET"
        })

        return response.data;
    },

    getAlbum: async function (id) {
        const response = await axios.request({
            url: `/api/album/${id}`,
            method: "GET"
        }).catch(err => {
            console.log('catch');
            throw new Response("", {
                status: 404,
                statusText: "Not Found",
            });
        });

        return response.data;
    },

    updateAlbum: async function (id, formData) {
        const response = await axios.request({
            url: `/api/album/${id}`,
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data;
    },

    combineAlbums: async function (formData) {
        const response = await axios.request({
            url: `/api/combineAlbums`,
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data;
    },

    getArtists: async function (page) {
        const response = await axios.request({
            url: `/api/artists?page=${page}`,
            method: "GET"
        });

        return response.data;
    },

    searchArtists: async function (search) {
        const response = await axios.request({
            url: `/api/searchArtists`,
            method: "POST",
            data: {
                search: search
            }
        });

        return response.data;
    },

    searchAlbum: async function (search) {
        const response = await axios.request({
            url: `/api/searchAlbum`,
            method: "POST",
            data: {
                search: search
            }
        });

        return response.data;
    },

    getArtist: async function (id) {
        const response = await axios.request({
            url: `/api/artist/${id}`,
            method: "GET"
        });

        return response.data;
    },

    updateArtist: async function (id, formData) {
        const response = await axios.request({
            url: `/api/artist/${id}`,
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data;
    },

    getPlaylist: async function (id,sortField = 'tracks.title', order = 'asc',  page = 1) {
        const response = await axios.request({
            url: `/api/playlist/${id}?page=${page}&sort=${sortField}&order=${order}`,
            method: "GET"
        });

        return response.data;
    },

    addPlaylist: async function (formData) {
        const response = await axios.request({
            url: `/api/playlist`,
            method: "PUT",
            data: {
                formData: formData
            }
        });
        hideLoader();
        return response.data;
    },

    editPlaylist: async function (formData) {
        const response = await axios.request({
            url: `/api/playlist/${formData.id}`,
            method: "POST",
            data: {
                formData: formData
            }
        });
        hideLoader();
        return response.data;
    },

    deletePlaylist: async function (id) {
        const response = await axios.request({
            url: `/api/playlist/${id}`,
            method: "DELETE"
        });
        hideLoader();
        return response.data;
    },

    addPlaylistItems: async function (id, type, ids) {
        const response = await axios.request({
            url: `/api/playlist/${id}/addItems`,
            method: "POST",
            data: {
                type: type,
                ids: ids
            }
        });

        return response.data;
    },
    removePlaylistItems: async function (id, type, ids) {
        const response = await axios.request({
            url: `/api/playlist/${id}/removeItems`,
            method: "POST",
            data: {
                type: type,
                ids: ids
            }
        });

        return response.data;
    },

    searchFor: async function (word) {
        const response = await axios.request({
            url: `/api/search?term=${word}`,
            method: "GET"
        });

        return response.data;
    },


    getQueue: async function (context) {
        const response = await axios.request({
            url: `/api/player/getQueue`,
            method: "POST",
            data: {context: context}
        });

        return response.data;
    },

    syncTracks: async function () {
        const response = await axios.request({
            url: `/api/syncTracks`,
            method: "GET"
        });

        return response.data;
    },

    getSettings: async function () {
        const response = await axios.request({
            url: `/api/settings`,
            method: "GET"
        });

        return response.data;
    },

    checkSettings: async function (settings) {
        const response = await axios.request({
            url: `/api/checkSettings`,
            method: "POST",
            data: settings
        });

        return response.data;
    },

    saveSettings: async function (settings) {
        const response = await axios.request({
            url: `/api/saveSettings`,
            method: "POST",
            data: settings
        });

        return response.data;
    },

    setup: async function (formData) {
        const response = await axios.request({
            url: `/api/setup`,
            method: "POST",
            data: formData
        });

        return response.data;
    },

    download: async function (trackId) {
        const response = await axios.request({
            url: `/api/download/track/${trackId}`,
            method: "GET",
        });

        return response.data;
    },

    like: async function (trackId) {
        const response = await axios.request({
            url: `/api/like`,
            method: "POST",
            data: {track: trackId}
        });

        return response.data;
    },

    getFavorites: async function (sortField = 'tracks.title', order = 'asc',  page = 1) {
        const response = await axios.request({
            url: `/api/favorites?page=${page}&sort=${sortField}&order=${order}`,
            method: "GET"
        });

        return response.data;
    },
}
