import {create} from "zustand";

const useTrackStore = create((set, get) => ({
    items : [],
    typedItems: [],
    setItems: (items) => {
        set({
            items: items
        });
    },
    addItems: (items) => set((state) => ({ items: [...state.items, ...items]})),
    updateItems: (response) => {
        const currentItems = get().items;
        let newItems = [...currentItems];

        // find updated items in items and update
        response['tracks'].map((track) => {
            let index = currentItems.findIndex(music => music.id === track.id);
            newItems[index] = track;
        });

        // find in typed items and update them too
        const currentTypedItems = get().typedItems;
        if(Object.entries(currentTypedItems).length) {
            let newTypedItems = {...currentTypedItems};
            for (const [type, typedItems] of Object.entries(currentTypedItems)) {
                response['tracks'].map((track) => {
                    let index = typedItems.findIndex(music => music.id === track.id);
                    if(index > -1) {
                        newTypedItems[type][index] = track;
                    }
                });
            }
            set({
                items: newItems,
                typedItems: newTypedItems
            })
        } else {
            set({
                items: newItems
            })
        }
    },
    setTypedItems: (items, type) => {
        const currentItems = get().typedItems;

        let newItems = {...currentItems};
        newItems[type] = items;

        set({
            typedItems: newItems
        })
    },
    trackCount: 0,
    setTrackCount: (count) => set(() => ({ trackCount: count })),
    trackLength: 0,
    setTrackLength: (length) => set(() => ({ trackLength: length })),
}));

export default useTrackStore;
