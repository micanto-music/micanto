import { BaseModal } from './BaseModal';
import { useForm, Controller } from "react-hook-form";
import {useTranslation} from "react-i18next";
import AsyncCreatableSelect from 'react-select/async-creatable';
import defaultCover from "../../assets/img/logo.svg";
import {PlayerAPI} from "../../api/PlayerAPI";
import {hideLoader, ItemsShareSameValue, showLoader} from "../../helper/helper";
import {isEqual} from "lodash";
import {mapResponseToValuesAndLabels} from "../../helper/helper";
import {useState} from "react";
import EditCoverDroppable from "../EditCoverDroppable";
import useTrackStore from "../../store/TrackStore";

export default function ModalTrackEdit(props) {
    const [t] = useTranslation();
    let tracks = props.data;
    const cover = tracks[0].cover ? (ItemsShareSameValue(tracks, 'cover') ? tracks[0].cover: defaultCover) : defaultCover;
    const [newCover, setCover] = useState(cover);
    const updateItems = useTrackStore((state) => state.updateItems);
    const { control, formState: { errors }, register, handleSubmit } = useForm();
    const onlyOne = tracks.length === 1;
    const placeholder = onlyOne ? '' : t('edit.leave');
    const [crop, setCrop] = useState({});
    const saveCrop = (croppedArea, croppedAreaPixels) => {
        setCrop(croppedAreaPixels);
    }

    let artistOptions = [];
    if(onlyOne) {
        artistOptions = tracks[0].artists.map((item) => {
           return {value: item.name, label: item.name}
        });
    } else {
        let artist_names = [
            ...new Set(tracks[0].artists.map((element) => element.name)),
        ];
        let equal = false;
        for(let i = 1; i < tracks.length; i++){
            let names = [
                ...new Set(tracks[i].artists.map((element) => element.name)),
            ];
            equal = isEqual(artist_names, names);
            if(!equal) break;
        }

        if(equal) {
            artistOptions = tracks[0].artists.map((item) => {
                return {value: item.name, label: item.name}
            });
        }
    }

    const formData = {
        title: ItemsShareSameValue(tracks, 'title') ? tracks[0].title: '',
        album: ItemsShareSameValue(tracks, 'album') ? tracks[0].album: '',
        track: ItemsShareSameValue(tracks, 'track') ? tracks[0].track: '',
        disc: ItemsShareSameValue(tracks, 'disc') ? tracks[0].disc: '',
        genre: ItemsShareSameValue(tracks, 'genre') ? tracks[0].genre: '',
        explicit: ItemsShareSameValue(tracks, 'explicit') ? tracks[0].explicit: '',
        year: ItemsShareSameValue(tracks, 'year') ? tracks[0].year: '',
    }

    const onSubmit = async (values) => {
        showLoader();
        const formData = new FormData();

        // add track ids as array
        tracks.map((element) => {
            formData.append('tracks[]', element.id);
        });

        // add cover
        if(newCover && newCover !== cover) {
            formData.append("image", newCover);
            formData.append("crop", JSON.stringify(crop));
        }

        // add all fields
        for (let key in values) {
            let value = values[key];
            // console.log(value);
            if( Array.isArray(value)) {
                value.map((element) => {
                    formData.append(key+'[]', element);
                });
            } else {
                formData.append(key, value)
            }
        }

        // make album a string
        formData.set('album', values.album.value);

        PlayerAPI.updateTracks(formData).then((res) => {
            updateItems(res);
            // useTrackStore.getState().updateItems(res);
            hideLoader();
        });
        props.onClose();
    };

    async function searchArtists(value) {
        return PlayerAPI.searchArtists(value)
            .then((response) => response.map(mapResponseToValuesAndLabels))
    }

    async function searchAlbum(value) {
        return PlayerAPI.searchAlbum(value)
            .then((response) => response.map(mapResponseToValuesAndLabels))
    }

    return(
        <BaseModal title={t('context.edit_tracks')} show={props.isOpen} onClose={props.onClose}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <EditCoverDroppable cover={cover} setCover={setCover} saveCrop={saveCrop}/>

                <div className="form-field">
                    <label>{t('edit.title')}</label>
                    <input className="w-full form-input"
                           placeholder={placeholder}
                           defaultValue={formData?.title} {...register("title", {
                        required: {
                            value: onlyOne,
                            message: t('edit.required'),
                        }
                    })} />
                    {errors.title?.message && <div className="validationText">{errors.title?.message}</div>}
                </div>

                <div className="form-field">
                    <label>{t('edit.artists')}</label>
                    <Controller
                        control={control}
                        defaultValue={artistOptions.map(c => c.value)}
                        name="artists"
                        rules={{
                            required: {
                                value: onlyOne,
                                message: t('edit.required'),
                            }
                        }}
                        render={({field: {onChange, value, ref}}) => (
                            <AsyncCreatableSelect
                                className="multi-select"
                                classNamePrefix="micanto-select"
                                inputRef={ref}
                                placeholder={placeholder}
                                defaultValue={artistOptions.filter(c => value.includes(c.value))}
                                onChange={val => onChange(val.map(c => c.value))}
                                noOptionsMessage={() => t('select.noOptionsMessage')}
                                formatCreateLabel={(inputValue) => `${t('select.create')} "${inputValue}"`}
                                loadingMessage={() => t('select.loadingMessage')}
                                loadOptions={searchArtists}
                                options={artistOptions}
                                isMulti
                                cacheOptions
                            />
                        )}
                    />
                    {errors.artists?.message && <div className="validationText">{errors.artists?.message}</div>}
                </div>

                <div className="form-field">
                    <label>{t('edit.album')}</label>
                    <Controller
                        control={control}
                        defaultValue={{value: formData?.album, label: formData?.album}}
                        name="album"
                        rules={{
                            required: {
                                value: onlyOne,
                                message: t('edit.required'),
                            }
                        }}
                        render={({field: {onChange, value, ref}}) => (
                            <AsyncCreatableSelect
                                className="select"
                                classNamePrefix="micanto-select"
                                inputRef={ref}
                                placeholder={placeholder}
                                defaultValue={{value: formData?.album, label: formData?.album}}
                                onChange={(val) => onChange(val)}
                                noOptionsMessage={() => t('select.noOptionsMessage')}
                                loadingMessage={() => t('select.loadingMessage')}
                                formatCreateLabel={(inputValue) => `${t('select.create')} "${inputValue}"`}
                                loadOptions={searchAlbum}
                                cacheOptions
                                isClearable
                            />
                        )}
                    />
                </div>

                <div className="form-field form-check">
                    <label>
                        <input type="checkbox" {...register("compilation")} /> {t('edit.compilation')}
                    </label>
                </div>

                <div className="form-field form-check">
                    <label>
                        <input
                            type="checkbox"
                            defaultChecked={formData?.explicit == 1}
                            {...register("explicit")} /> {t('edit.explicit')}
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="form-field">
                        <label>{t('edit.track')}</label>
                        <input type="number" className="w-full form-input"
                               placeholder={placeholder}
                               defaultValue={formData?.track} {...register("track")} />
                    </div>

                    <div className="form-field">
                        <label>{t('edit.disc')}</label>
                        <input type="number" className="w-full form-input"
                               placeholder={placeholder}
                               defaultValue={formData?.disc} {...register("disc")} />
                    </div>


                    <div className="form-field">
                        <label>{t('edit.genre')}</label>
                        <input type="text" className="w-full form-input"
                               placeholder={placeholder}
                               defaultValue={formData?.genre} {...register("genre")} />
                    </div>

                    <div className="form-field">
                        <label>{t('edit.year')}</label>
                        <input type="number" className="w-full form-input"
                               placeholder={placeholder}
                               defaultValue={formData?.year} {...register("year")} />
                    </div>
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
}
