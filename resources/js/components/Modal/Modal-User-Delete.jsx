import {BaseModal} from "./BaseModal";
import {useTranslation} from "react-i18next";
import {PlayerAPI} from "../../api/PlayerAPI";
import {showLoader} from "../../helper/helper";
import useUserStore from "../../store/UserStore";

export default function ModalUserDelete(props) {
    const [t] = useTranslation();
    const [deleteItem] = useUserStore(state => [state.deleteItem]);

    const handleDelete = async () => {
        showLoader();
        PlayerAPI.deleteUser(props?.data?.id).then((response) => {
            // close modal
            props.onClose();

            // remove user from store
            deleteItem(props.data);
        });
    };
    return(
        <BaseModal title="" show={props.isOpen} onClose={props.onClose}>
            <p className="mb-4">{t('userList.delete')}</p>
            <div className="modal-footer">
                <button onClick={props.onClose} type="button" className="btn btn-close mr-2" data-bs-dismiss="modal"
                        aria-label="Close">{t('cancel')}
                </button>
                <button className="btn btn-primary" onClick={handleDelete} type="submit">{t('delete')}</button>
            </div>
        </BaseModal>
    )
}
