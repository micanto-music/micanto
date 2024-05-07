import {Suspense, lazy} from 'react';
import useApp from "../../store/appStore";

export function LazyModal({filename}) {
    const [isModalOpen, closeModal, modal] = useApp(state => [state.isModalOpen, state.closeModal, state.modal]);
    console.log(`loading ./Modal/${filename}.jsx`);
    const handleModalClose = () => {
        closeModal();
    };

    const Component = lazy(async () => await import(`./Modal-${filename}.jsx`));

    return (
        <Suspense fallback={null}>
            {filename ? (<Component isOpen={isModalOpen} onClose={handleModalClose} event={modal?.meta} data={modal?.data}/>) : null}
        </Suspense>
    );
}
