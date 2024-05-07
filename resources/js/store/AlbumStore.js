import {create} from "zustand";

const useAlbumStore = create((set, get) => ({
    items : [],
    album: null,
    setAlbum: (album) => set({ album: album }),
    setItems: (items) => {
        set({
            items: items
        });
    },
    addItems: (items) => set((state) => ({ items: [...state.items, ...items]})),
    updateItems: (response) => {
        const currentItems = get().items;
        let newItems = [ ...currentItems];

        // remove as removed tagged
        if(response['removed']['albums']) {
            response['removed']['albums'].map((album) => {
                let index = currentItems.findIndex(music => music.id === album.id);
                delete newItems[index];
            });
        }

        // find updated items in items and update
        response['albums'].map((album) => {
            let index = currentItems.findIndex(music => music.id === album.id);
            if(index === -1) index = 0;
            newItems[index] = album;
        });

        set({
            album: newItems[0],
            items: newItems
        })
    }
}));

export default useAlbumStore;
