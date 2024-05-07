import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {PlayerAPI} from "../../api/PlayerAPI";
import React, {useCallback, useState} from "react";
import debounce from "lodash/debounce";
import {PiCheckBold, PiXBold} from "react-icons/pi";
import {hideLoader} from "../../helper/helper";

export default function Page2({navigate, page}){
    const [t] = useTranslation();
    const { formState: { errors, isDirty, isValid}, register, handleSubmit, watch } = useForm();
    const [validFolder, setValidFolder] = useState(null);

    const checkSettings = (data) => {
        PlayerAPI.checkSettings({"music_folder": data}).then((res) => {
            setValidFolder(res);
        });
    }

    const debouncedSave = useCallback(
        debounce((newValue) => checkSettings(newValue), 500),
        []
    );

    const updateValue = (newValue) => {
        debouncedSave(newValue);
    };

    const onSubmit = async (data) => {
        PlayerAPI.saveSettings(data).then((res) => {
            if(res !== false) {
                navigate(3);
            }
        })

    }

    const onBack = () => {
        navigate(1);
    }

    return(
        <div className={page !== 2 ? 'hidden' : ''}>
            <h2 className="mb-3">{t('setup.page2.title')}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-field">
                    <label>{t('setup.page2.music_folder')}</label>

                    <div className="relative">
                        <input className="w-full form-input"

                               {...register("music_folder", {
                                   onChange: (e) => updateValue(e.target.value),
                                   required: {
                                       value: true,
                                       message: t('edit.required'),
                                   }
                               })}
                        />
                        <div className="folder-check">
                            {validFolder == true && <PiCheckBold color={'green'} size={28}/>}
                            {validFolder == false && <PiXBold color={'red'} size={28}/>}
                        </div>
                        <p>{t('settings.musicPathHint')}</p>
                    </div>
                    {errors.music_folder?.message &&
                        <div className="validationText">{errors.music_folder?.message}</div>}
                </div>
                <div className="flex justify-end">
                    <button onClick={onBack} type="button"
                            className="btn back-btn btn-close mr-2">{t('setup.back')}</button>
                    <button disabled={!isDirty || !isValid} className="btn btn-primary"
                            type="submit">{t('setup.continue')}</button>
                </div>
            </form>
        </div>
    );

}
