import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {PlayerAPI} from "../../api/PlayerAPI";

export default function Page3({navigate, page}){
    const [t] = useTranslation();
    const { formState: { errors, isDirty, isValid}, register, handleSubmit, watch } = useForm();

    const onSubmit = async (data) => {
        data['page'] = 3;
        PlayerAPI.setup(data).then((res) => {
            if(res === true) {
                navigate(4);
                setError(null);
            } else {
                setError(t('setup.page3.invalid'));
            }
        });
    }

    const onBack = () => {
        navigate(2);
    }

    return(
        <div className={page !== 3 ? 'hidden' : ''}>
            <h2 className="mb-3">{t('setup.page3.title')}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-field">
                    <label>{t('setup.page3.name')}</label>
                    <input className="w-full form-input"
                           {...register("name", {
                               required: {
                                   value: true,
                                   message: t('edit.required'),
                               }
                           })}
                    />
                    {errors.name?.message && <div className="validationText">{errors.name?.message}</div>}
                </div>
                <div className="form-field">
                    <label>{t('setup.page3.email')}</label>
                    <input className="w-full form-input"
                           type="email"
                           {...register("email", {
                               required: {
                                   value: true,
                                   message: t('edit.required'),
                               },
                               pattern: {
                                   value: /\S+@\S+\.\S+/,
                                   message: t('error.email'),
                               }
                           })}
                    />
                    {errors.email?.message && <div className="validationText">{errors.email?.message}</div>}
                </div>
                <div className="form-field">
                    <label>{t('setup.page3.password')}</label>

                    <input type="password" className="w-full form-input"
                           {...register("password", {
                               required: {
                                   value: true,
                                   message: t('edit.required'),
                               },
                               minLength: {
                                   value: 5,
                                   message: t('error.minLength'),
                               }
                           })}
                    />
                    {errors.password?.message && <div className="validationText">{errors.password?.message}</div>}
                </div>
                <div className="flex justify-end">
                    <button onClick={onBack} type="button"
                            className="btn back-btn btn-close mr-2">{t('setup.back')}</button>
                    <button className="btn btn-primary"
                            type="submit">{t('setup.continue')}</button>
                </div>
            </form>
        </div>
    );

}
