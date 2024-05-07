import {create} from "zustand";

const useArtistStore = create((set, get) => ({
    items : [],
    artist: null,
    setArtist: (artist) => set({ artist: artist }),
    setItems: (items) => {
        set({
            items: items
        });
    },
    addItems: (items) => set((state) => ({ items: [...state.items, ...items]})),
    updateItem: (response) => {
        const currentItems = get().items;
        let newItems = [ ...currentItems];
        let index = currentItems.findIndex(music => music.id === response.id);
        newItems[index] = response;
        set({
            artist: response,
            items: newItems
        })
    }
}));

export default useArtistStore;
