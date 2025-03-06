import {BaseModal} from "./BaseModal";
import {useTranslation} from "react-i18next";
import EditCoverDroppable from "../EditCoverDroppable";
import {useForm} from "react-hook-form";
import defaultCover from "../../assets/img/user.png";
import {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {hideLoader, showLoader} from "../../helper/helper";
import {PlayerAPI} from "../../api/PlayerAPI";
import useUserStore from "../../store/UserStore";

export default function ModalUserAdd(props) {
    const [t] = useTranslation();
    const [addItem] = useUserStore(state => [state.addItem]);
    const { user, setUser} = useAuth();
    const { formState: { errors }, register, handleSubmit, watch } = useForm();
    const cover = props?.data?.image ? props?.data?.image : defaultCover;
    const [newCover, setCover] = useState(cover);
    const [globalError, setGlobalError] = useState();

    let userData = {};

    const [crop, setCrop] = useState({});
    const saveCrop = (croppedArea, croppedAreaPixels) => {
        setCrop(croppedAreaPixels);
    }

    const onSubmit = async (data) => {
        showLoader();
        const formData = new FormData();

        if(newCover && newCover !== cover) {
            formData.append("image", newCover);
        }

        if(crop && Object.hasOwn(crop, 'x')) {
            formData.append("crop", JSON.stringify(crop));
        }

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.new_password);


        PlayerAPI.addUser(formData).then((res) => {
            hideLoader();
            addItem(res?.data);
            props.onClose();
        }).catch(error => {
            let msg = error?.response?.data?.message;
            if(msg) {
                setGlobalError(msg);
            } else {
                setGlobalError(null);
            }
        });
    };

    return(
        <BaseModal title={t('userList.add')} show={props.isOpen} onClose={props.onClose}>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                <EditCoverDroppable cover={cover} setCover={setCover} saveCrop={saveCrop}/>
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
                {globalError &&
                    <div className="global-form-error validationText">{ t(globalError) }</div>
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
                    <label>{t('userList.password')}</label>
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
    );

}
