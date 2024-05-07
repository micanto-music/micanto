import {useImageDrop} from "../hooks/useImageDrop";
import {useTranslation} from "react-i18next";

export default function EditCoverDroppable( {cover, setCover} ) {
    const {droppable, onDragOver,onDragLeave,onDrop,setPreview} = useImageDrop(setCover);
    const [t] = useTranslation();

    const openFileBrower = (e) => {
        e.preventDefault();
        document.getElementById('image-upload').click();
    }

    return(
        <>
        <div
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            className={droppable ? `droppable upload-area flex mb-4` : `upload-area flex mb-4`}>

            <div>
                <img width="140px"
                     src={cover}
                     className="rounded-lg"/>
            </div>

            <div className="justify-center items-center flex flex-1">
                <div className="text-center">
                    {t('dnd.text')} <br/>
                    <a className="btn btn-primary mt-2" href="#" onClick={openFileBrower}>{t('dnd.choose')}</a>
                </div>
            </div>
        </div>
        <input
            id="image-upload"
            type="file"
            onChange={(e) => setPreview(e.target.files[0])}
        />
        </>
    )
}
