import useApp from "../../store/appStore";
import {LazyModal} from "./LazyModal";
export default function ModalContainer() {
    const [modal, closeModal] = useApp(state => [state.modal, state.closeModal]);
    return (
        <>
            {(modal && modal?.open) && <LazyModal key={modal?.filename} filename={modal?.filename}/>}
        </>
    );
}
