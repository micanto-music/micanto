import {BaseModal} from "./BaseModal";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {PlayerAPI} from "../../api/PlayerAPI";
import {showLoader} from "../../helper/helper";
import usePlayer from "../../store/playerStore";

export default function Edit(props) {
    const [t] = useTranslation();
    const [editPlaylist] = usePlayer((state) => [state.editPlaylist]);
    const { control, formState: { errors }, register, handleSubmit } = useForm({});

    const formData = {
        'name': props?.data?.name,
        'id': props?.data?.id
    };

    const onSubmit = async (values) => {
        showLoader();
        PlayerAPI.editPlaylist(values).then((response) => {
            // edit playlists in store
            editPlaylist(response);
            // close modal
            props.onClose();
        });
    };
    return(
        <BaseModal title="Playlist" show={props.isOpen} onClose={props.onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <label>{t('playlist.name')}</label>
                    <input defaultValue={formData?.id} type="hidden" {...register("id")}/>
                    <input className="w-full form-input"
                           placeholder={t('playlist.name')}
                           defaultValue={formData?.name}
                           {...register("name", {
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
}
