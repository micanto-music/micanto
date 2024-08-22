import { useState } from 'react'
import {useImageDrop} from "../hooks/useImageDrop";
import {useTranslation} from "react-i18next";
import Cropper from "react-easy-crop";

export default function EditCoverDroppable( {cover, setCover, saveCrop} ) {
    const {droppable, onDragOver,onDragLeave,onDrop,setPreview} = useImageDrop(setCover);
    const [t] = useTranslation();
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        saveCrop(croppedArea, croppedAreaPixels);
    }

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

                <div className="crop-area">
                    <Cropper
                        image={cover}
                        crop={crop}
                        zoom={zoom}
                        aspect={1 / 1}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
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
