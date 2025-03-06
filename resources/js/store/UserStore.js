import {create} from "zustand";

const useUserStore = create((set, get) => ({
    items : [],
    setItems: (items) => {
        set({
            items: items
        });
    },
    addItem: (item) => set((state) => ({ items: [...state.items, item]})),
    deleteItem: (id) => {
        const currentItems = get().items;
        let newItems = [ ...currentItems];
        let index = currentItems.findIndex(user => user.id === id);
        newItems.splice(index, 1);
        set({
            items: newItems
        })
    },
    updateItem: (response) => {
        const currentItems = get().items;
        let newItems = [ ...currentItems];
        let index = currentItems.findIndex(user => user.id === response.id);
        newItems[index] = response;
        set({
            items: newItems
        })
    }
}));

export default useUserStore;
