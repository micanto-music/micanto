import { BaseModal } from './BaseModal';
import { useForm, Controller } from "react-hook-form";
import {useTranslation} from "react-i18next";
import AsyncCreatableSelect from 'react-select/async-creatable';
import defaultCover from "../../assets/img/logo.svg";
import {PlayerAPI} from "../../api/PlayerAPI";
import {hideLoader, ItemsShareSameValue, previewFile, showLoader} from "../../helper/helper";
import {mapResponseToValuesAndLabels} from "../../helper/helper";
import { useNavigate } from "react-router-dom";
import {useImageDrop} from "../../hooks/useImageDrop";
import EditCoverDroppable from "../EditCoverDroppable";
import {useState} from "react";
import useAlbumStore from "../../store/AlbumStore";

export default function ModalAlbumEdit(props) {
    const [t] = useTranslation();
    const { control, formState: { errors }, register, handleSubmit, watch } = useForm();
    const navigate = useNavigate();
    const cover = props.data.cover ? props.data.cover : defaultCover;
    const [newCover, setCover] = useState(cover);
    const updateItems = useAlbumStore((state) => state.updateItems);
    const [crop, setCrop] = useState({});
    const saveCrop = (croppedArea, croppedAreaPixels) => {
        setCrop(croppedAreaPixels);
    }
    async function searchArtists(value) {
        return PlayerAPI.searchArtists(value)
            .then((response) => response.map(mapResponseToValuesAndLabels))
    }

    const albumData = props.data;

    const artist = {
        value: albumData.artist.name,
        label: albumData.artist.name,
    }

    const onSubmit = async (values) => {
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

        for (const key in values) {
            if (key === 'field') {
                formData.append(key, values[key][1])
            } else {
                formData.append(key, values[key])
            }
        }

        PlayerAPI.updateAlbum(albumData?.id, formData).then((res) => {
            updateItems(res);
            hideLoader();
        });
        props.onClose();
    };

    return(
        <BaseModal title={t('context.edit_album')} show={props.isOpen} onClose={props.onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <EditCoverDroppable cover={cover} setCover={setCover} saveCrop={saveCrop}/>

                <div className="form-field">
                    <label>{t('edit.name')}</label>
                    <input className="w-full form-input"
                           defaultValue={albumData?.name} {...register("name", {
                        required: {
                            value: true,
                            message: t('edit.required'),
                        }
                    })} />
                    {errors.name?.message && <div className="validationText">{errors.name?.message}</div>}
                </div>
                {!watch("compilation") &&
                    <div className="form-field">
                        <label>{t('edit.artists')}</label>
                        <Controller
                            control={control}
                            defaultValue={artist}
                            name="artist"
                            rules={{
                                required: {
                                    value: true,
                                    message: t('edit.required'),
                                }
                            }}
                            render={({field: {onChange, value, ref}}) => (
                                <AsyncCreatableSelect
                                    className="select"
                                    classNamePrefix="micanto-select"
                                    inputRef={ref}
                                    defaultValue={artist}
                                    noOptionsMessage={() => t('select.noOptionsMessage')}
                                    formatCreateLabel={ (inputValue) => `${t('select.create')} "${inputValue}"`}
                                    loadingMessage={() => t('select.loadingMessage')}
                                    onChange={(val) => onChange(val)}
                                    loadOptions={searchArtists}
                                    cacheOptions
                                    isClearable
                                />
                            )}
                        />
                    </div>
                }

                <div className="form-field form-check">
                    <label>
                        <input type="checkbox"
                               defaultChecked={albumData?.is_compilation == 1} {...register("compilation")} /> {t('edit.compilation')}
                    </label>
                </div>

                <div className="form-field form-check">
                    <label>
                        <input type="checkbox"
                               defaultChecked={albumData?.is_single == 1} {...register("single")} /> {t('edit.single')}
                    </label>
                </div>

                <div className="form-field">
                    <label>{t('edit.year')}</label>
                    <input type="number" className="w-full form-input"
                           defaultValue={albumData?.year} {...register("year")} />
                </div>

                <div className="modal-footer">
                    <button onClick={props.onClose} type="button" className="btn btn-close mr-2" data-bs-dismiss="modal"
                            aria-label="Close">{t('close')}
                    </button>
                    <button className="btn btn-primary" type="submit">{t('save')}</button>
                </div>
            </form>
        </BaseModal>
    );
}
