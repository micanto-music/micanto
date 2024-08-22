import { BaseModal } from './BaseModal';
import { useForm } from "react-hook-form";
import {useTranslation} from "react-i18next";
import defaultCover from "../../assets/img/logo.svg";
import {PlayerAPI} from "../../api/PlayerAPI";
import {hideLoader, showLoader} from "../../helper/helper";
import EditCoverDroppable from "../EditCoverDroppable";
import {useState} from "react";
import useArtistStore from "../../store/ArtistStore";

export default function ModalArtistEdit(props) {
    const [t] = useTranslation();

    const { formState: { errors }, register, handleSubmit, watch } = useForm();

    const cover = props.data.image ? props.data.image : defaultCover;
    const [newCover, setCover] = useState(cover);
    const updateItem = useArtistStore((state) => state.updateItem);
    const artistData = props.data;
    const [crop, setCrop] = useState({});
    const saveCrop = (croppedArea, croppedAreaPixels) => {
        setCrop(croppedAreaPixels);
    }
    const onSubmit = async (data) => {
        showLoader();
        const formData = new FormData();
        let newImage = false;
        if(newCover && newCover !== cover) {
            formData.append("image", newCover);
            newImage = true;
        }

        if(crop && Object.hasOwn(crop, 'x')) {
            formData.append("crop", JSON.stringify(crop));
            newImage = true;
        }

        formData.append("name", data.name);
        PlayerAPI.updateArtist(artistData?.id, formData).then((res) => {
            if(newImage) {
                res.data.image = res.data.image + "?t=" + Date.now();
            }
            updateItem(res.data);
            hideLoader();
        });
        props.onClose();
    };

    return(
        <BaseModal title={t('context.edit_artist')} show={props.isOpen} onClose={props.onClose}>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                <EditCoverDroppable cover={cover} setCover={setCover} saveCrop={saveCrop}/>

                <div className="form-field">
                    <label>{t('edit.name')}</label>
                    <input className="w-full form-input"
                           defaultValue={artistData?.name} {...register("name", {
                        required: {
                            value: true,
                            message: t('edit.required'),
                        }
                    })} />
                    {errors.name?.message && <div className="validationText">{errors.name?.message}</div>}
                </div>

                <div className="modal-footer">
                    <button onClick={props.onClose} type="button" className="btn btn-close mr-2" data-bs-dismiss="modal"
                            aria-label="Close">{t('close')}
                    </button>
                    <button className="btn btn-primary" type="submit">{t('save')}</button>
                </div>
            </form>
        </BaseModal>
    )
        ;
}
