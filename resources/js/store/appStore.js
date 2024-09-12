import {create} from "zustand";

const useApp = create((set, get) => ({
    title: null,
    setTitle: (title) => {
        set({
            title: title,
        });
        document.title = title;
    },
    modal: null,
    setModal: (filename, event, data) => {
        let modal = {
            filename:filename,
            meta: event,
            data: data,
            open: true
        }
        set(() => ({
            modal: modal
        }))
    },
    isModalOpen: (fileName) => {
        let modal = get().modal;
        return modal ? modal.open : false;
    },
    closeModal: (filename) => {
        let modal = get().modal;
        if(modal) {
            modal.open = false;
        } else {
            modal = null;
        }
        set(() => ({
            modal: modal
        }))
    },
    queueCollapsed: localStorage.getItem("queueCollapsed") === 'true',
    toggleQueueSidebar: () => {
        set((state) => {
            localStorage.setItem("queueCollapsed", !state.queueCollapsed);
            return {
                queueCollapsed: !state.queueCollapsed,
            };
        })
    }
}));

export default useApp;
