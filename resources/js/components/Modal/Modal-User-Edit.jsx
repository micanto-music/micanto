import { BaseModal } from './BaseModal';
import { useForm } from "react-hook-form";
import {useTranslation} from "react-i18next";
import defaultCover from "../../assets/img/user.png";
import {PlayerAPI} from "../../api/PlayerAPI";
import {hideLoader, showLoader} from "../../helper/helper";
import EditCoverDroppable from "../EditCoverDroppable";
import {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";

export default function ModalUserEdit(props) {
    const [t] = useTranslation();
    const { user} = useAuth();
    const { formState: { errors }, register, handleSubmit, watch } = useForm();

    const cover = props?.data?.image ? props?.data?.image : defaultCover;
    const [newCover, setCover] = useState(cover);
    const userData = props.data;
    const onSubmit = async (data) => {
        showLoader();
        const formData = new FormData();

        if(newCover && newCover !== cover) {
            formData.append("image", newCover);
        }

        if(data.password) {
            formData.append("password", data.password);
        }

        formData.append("name", data.name);
        formData.append("email", data.email);

        if(data.new_password != '') {
            formData.append("new_password", data.new_password);
        }

        PlayerAPI.updateUser(userData?.id, formData).then(() => {
            // navigate("/artists", { replace: true});
            hideLoader();
        });
        props.onClose();
    };

    return(
        <BaseModal title={t('profile.title')} show={props.isOpen} onClose={props.onClose}>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                <EditCoverDroppable cover={cover} setCover={setCover}/>
                {user.is_admin !== 1 &&
                    <div className="form-field">
                        <label>{t('profile.current_password')}</label>
                        <input type="password" className="w-full form-input"
                               {...register("password",
                                   {
                                       required: {
                                           value: true,
                                           message: t('edit.required')
                                       },
                                   })
                               }
                        />
                        {errors.password?.message && <div className="validationText">{errors.password?.message}</div>}
                        <p>{t('profile.password_hint')}</p>
                    </div>
                }
                <div className="form-field">
                    <label>{t('profile.name')}</label>
                    <input type="text" className="w-full form-input"
                           defaultValue={userData?.name}
                           {...register("name",
                               {
                                   required: {
                                       value: true,
                                       message: t('edit.required')
                                   },
                               })
                           }
                    />
                    {errors.name?.message && <div className="validationText">{errors.name?.message}</div>}
                </div>

                <div className="form-field">
                    <label>{t('profile.email')}</label>
                    <input type="email" className="w-full form-input"
                           defaultValue={userData?.email}
                           {...register("email",
                               {
                                   required: {
                                       value: true,
                                       message: t('edit.required')
                                   },
                               })
                           }
                    />
                    {errors.email?.message && <div className="validationText">{errors.email?.message}</div>}
                </div>

                <div className="form-field">
                    <label>{t('profile.new_password')}</label>
                    <input type="password" className="w-full form-input"
                           {...register("new_password")} />
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
