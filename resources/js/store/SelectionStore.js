import {create} from "zustand";

const useSelection = create((set, get) => ({
    selected : [],
    setSelected: (item) => {
        const selected = get().selected;
        let newSelected = [...selected];
        if(item.selected) {
            let index = selected.findIndex(music => music.id === item.id);
            if(index === -1) {
                newSelected.push(item);
            }
        } else {
            let index = selected.findIndex(music => music.id === item.id);
            newSelected.splice(index, 1)
        }

        set({
            selected: newSelected
        })
    }
}));

export default useSelection;
