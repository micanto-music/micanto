import Header from "../components/Header/Header";
import HeaderTitle from "../components/Header/HeaderTitle";
import {useTranslation} from "react-i18next";
import Scroll from "../components/Scroll";
import {useForm} from "react-hook-form";
import {hideLoader, showLoader} from "../helper/helper";
import UserList from "../components/UserList";
import {PlayerAPI} from "../api/PlayerAPI";
import React, {useCallback, useEffect, useState} from "react";
import debounce from "lodash/debounce";
import {PiCheckBold, PiXBold} from "react-icons/pi";
import Sidebar from "../components/Sidebar";
const Settings = () => {

    const [t] = useTranslation();
    const [settings, setSettings] = useState();
    const [validFolder, setValidFolder] = useState(null);
    const { control, formState: { errors }, register, handleSubmit, watch } = useForm();
    const onSubmit = async (data) => {
        showLoader();
        PlayerAPI.saveSettings(data).then((res) => {
            hideLoader();
        })
    }



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

    useEffect(() => {
        PlayerAPI.getSettings().then((settings) => {
            // response handling
            setSettings(settings)
            checkSettings(settings.music_folder);
        })
    }, []);

    return (

        <div>
            <Header title={t('settings.title')}>
                <HeaderTitle>{t('settings.title')}</HeaderTitle>
            </Header>

            <Scroll>
                <div className="flex pl-5 pr-2">
                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-field">
                                <h2>{t('settings.musicPath')}</h2>
                                <label>{t('settings.musicPathHint')}</label>
                                <div className="relative">
                                <input type="text" className="w-full form-input"
                                       defaultValue={settings?.music_folder}
                                       {...register("music_folder",
                                           {
                                               onChange: (e) => updateValue(e.target.value),
                                               required: {
                                                   value: true,
                                                   message: t('edit.required')
                                               },
                                           })
                                       }
                                />
                                <div className="folder-check">
                                    {validFolder == true && <PiCheckBold color={'green'} size={28}/> }
                                    {validFolder == false && <PiXBold color={'red'} size={28}/>}
                                </div>
                                </div>

                                {errors.music_folder?.message &&
                                    <div className="validationText">{errors.music_folder?.message}</div>}
                            </div>

                            <button className="btn btn-primary">{t('save')}</button>
                        </form>
                    </div>
                </div>

                <UserList />

            </Scroll>

        </div>
    );
};

export default Settings;
