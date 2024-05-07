import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {PlayerAPI} from "../../api/PlayerAPI";
import {IoIosAlert} from "react-icons/io";
import React, {useState} from "react";

export default function Page1({navigate, page}){
    const [t] = useTranslation();
    const { formState: { errors, isDirty, isValid }, register, handleSubmit, watch } = useForm();
    const [error, setError] = useState();
    const onSubmit = async (data) => {
        data['page'] = 1;
        PlayerAPI.setup(data).then((res) => {
            if(res === true) {
                navigate(2);
                setError(null);
            } else {
                setError(t('setup.page1.invalid'));
            }
        });
    }

    return(
        <div className={page !== 1 ? 'hidden': ''}>
            <h2 className="mb-3">{t('setup.page1.title')}</h2>

            {error && (
                <div
                    className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                    role="alert">
                    <IoIosAlert size={20} className="mr-2"/>
                    <span className="sr-only">Info</span>
                    <div>{error}</div>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-field">
                    <label>{t('setup.page1.host')}</label>
                    <input className="w-full form-input"
                           {...register("host", {
                               required: {
                                   value: true,
                                   message: t('edit.required'),
                               }
                           })}
                    />
                    {errors.host?.message && <div className="validationText">{errors.host?.message}</div>}
                </div>

                <div className="form-field">
                    <label>{t('setup.page1.user')}</label>
                    <input className="w-full form-input"
                           {...register("user", {
                               required: {
                                   value: true,
                                   message: t('edit.required'),
                               }
                           })}
                    />
                    {errors.user?.message && <div className="validationText">{errors.user?.message}</div>}
                </div>

                <div className="form-field">
                    <label>{t('setup.page1.password')}</label>
                    <input className="w-full form-input"
                           {...register("password", {
                               required: {
                                   value: true,
                                   message: t('edit.required'),
                               }
                           })}
                    />
                    {errors.password?.message && <div className="validationText">{errors.password?.message}</div>}
                </div>

                <div className="form-field">
                    <label>{t('setup.page1.dbname')}</label>
                    <input className="w-full form-input"
                           {...register("dbname", {
                               required: {
                                   value: true,
                                   message: t('edit.required'),
                               }
                           })}
                    />
                    {errors.dbname?.message && <div className="validationText">{errors.dbname?.message}</div>}
                </div>

                <div className="form-field">
                    <label>{t('setup.page1.port')}</label>
                    <input className="w-full form-input"
                           defaultValue="3306"
                           {...register("port", {
                               required: {
                                   value: true,
                                   message: t('edit.required'),
                               }
                           })}
                    />
                    {errors.port?.message && <div className="validationText">{errors.port?.message}</div>}
                </div>

                <div className="flex justify-end">
                    <button disabled={!isDirty || !isValid} className="btn btn-primary"
                            type="submit">{t('setup.continue')}</button>
                </div>
            </form>
        </div>
);

}
