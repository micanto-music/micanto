import {BaseModal} from "./BaseModal";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {PlayerAPI} from "../../api/PlayerAPI";
import {showLoader} from "../../helper/helper";
import {useNavigate} from "react-router-dom";
import usePlayer from "../../store/playerStore";

export default function ModalPlaylistAdd(props) {
    const [t] = useTranslation();
    const navigate = useNavigate();
    const [addPlaylist] = usePlayer((state) => [state.addPlaylist]);
    const { control, formState: { errors }, register, handleSubmit } = useForm({});

    const onSubmit = async (values) => {
        showLoader();
        PlayerAPI.addPlaylist(values).then((response) => {
            // close modal
            props.onClose();

            // add playlist to store
            addPlaylist(response);

            // redirect to playlist
            navigate("/playlist/"+response.id);
        });
    };
    return(
        <BaseModal title="Playlist" show={props.isOpen} onClose={props.onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <label>{t('playlist.name')}</label>
                    <input className="w-full form-input"
                           placeholder={t('playlist.name')}
                           {...register("name", {
                        required: {
                            value: true,
                            message: t('edit.required'),
                        }
                    })} />
                    {errors.title?.message && <div className="validationText">{errors.title?.message}</div>}
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
