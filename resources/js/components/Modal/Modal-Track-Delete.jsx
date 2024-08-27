import {useTranslation} from "react-i18next";
import {BaseModal} from "./BaseModal";
import {hideLoader, showLoader} from "../../helper/helper";
import {PlayerAPI} from "../../api/PlayerAPI";

export default function ModalTrackDelete(props) {
    const [t] = useTranslation();

    const handleDelete = async () => {
        showLoader();
        let ids = props.data.map(track => track.id);
        PlayerAPI.deleteTracks(ids).then((response) => {
            props.onClose();
            hideLoader();

            // remove track(s) from store
        });
    };

    return(
        <BaseModal title="" show={props.isOpen} onClose={props.onClose}>
            <p className="mb-4">{t('track_delete')}</p>
            <div className="modal-footer">
                <button onClick={props.onClose} type="button" className="btn btn-close mr-2" data-bs-dismiss="modal"
                        aria-label="Close">{t('close')}
                </button>
                <button className="btn btn-primary" onClick={handleDelete} type="submit">{t('delete')}</button>
            </div>
        </BaseModal>
    );
}
