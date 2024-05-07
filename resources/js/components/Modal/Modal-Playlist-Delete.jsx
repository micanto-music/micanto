import {BaseModal} from "./BaseModal";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {PlayerAPI} from "../../api/PlayerAPI";
import {showLoader} from "../../helper/helper";
import {useNavigate} from "react-router-dom";
import usePlayer from "../../store/playerStore";

export default function ModalPlaylistDelete(props) {
    const [t] = useTranslation();
    const navigate = useNavigate();
    const [deletePlaylist] = usePlayer((state) => [state.deletePlaylist]);
    const { control, formState: { errors }, register, handleSubmit } = useForm({});

    const handleDelete = async () => {
        showLoader();
        PlayerAPI.deletePlaylist(props?.data?.id).then((response) => {
            // close modal
            props.onClose();

            // remove playlist from store
            deletePlaylist(props.data);

            // TODO navigate to home if current page is playlist
            if(false) {
                navigate("/start");
            }

        });
    };
    return(
        <BaseModal title="" show={props.isOpen} onClose={props.onClose}>
            <p className="mb-4">{t('playlist.delete_text')}</p>
            <div className="modal-footer">
                <button onClick={props.onClose} type="button" className="btn btn-close mr-2" data-bs-dismiss="modal"
                        aria-label="Close">{t('cancel')}
                </button>
                <button className="btn btn-primary" onClick={handleDelete} type="submit">{t('delete')}</button>
            </div>
        </BaseModal>
    )
}
