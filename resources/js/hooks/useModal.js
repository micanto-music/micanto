import { useCallback } from 'react';
import useApp from "../store/appStore";

export function useModal(modalFileName) {

    const [setModal] = useApp(state => [state.setModal]);

    const onOpen = useCallback(
        (event, data) => {
            setModal(modalFileName,event, data);
        },
        [modalFileName]
    );

    const isOpen = false;
    const onClose = false;


  return {
    isOpen,
    onOpen,
    onClose
  };
}
