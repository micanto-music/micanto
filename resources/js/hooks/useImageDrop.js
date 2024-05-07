import {acceptsImageDrop, previewFile} from "../helper/helper";
import {useState} from "react";

export const useImageDrop = ( setImage ) => {

    const [droppable, setDroppable] = useState(false);
    const onDragOver = (event) => {
        if (!acceptsImageDrop(event)) return false;
        event.preventDefault();
        setDroppable(true);
        return false
    }

    const onDragLeave = () => (setDroppable(false));

    const onDrop = async (event) => {
        if (!acceptsImageDrop(event)) return false;
        event.preventDefault();
        setDroppable(false);

        try {
            let file = event.dataTransfer.files[0];
            await setPreview(file);
        }  catch (e) {

        }
        return false;
    }

    const setPreview = async (file) => {
        setImage(file);
        document.querySelector('.upload-area img').src = await previewFile(file);
    }

    return {
        onDragOver,
        onDragLeave,
        onDrop,
        setPreview,
        droppable
    }

}
