import {memo, MouseEventHandler, ReactNode} from 'react';
import {createPortal} from 'react-dom';

export const BaseModal = memo((props) => {
    const {title, footer, closeOnTap, onClose, children} = props;

    const root = document.getElementById('app');

    if (!root) throw new Error('Root node not found. Can`t render modal.');

    const handleInsideClick = (event) => {
        if (!closeOnTap) {
            event.stopPropagation();
        }
    };

    const handleOutsideClick = (event) => {
        if (onClose) {
            onClose();
        }
    };

    return createPortal(
        <div
            className="modal contexify_willEnter-fade"
        >
            <div className="modal-panel" onClick={handleInsideClick}>
                <div className="modal-content">
                    {title != '' &&
                        <div className="modal-header">
                            <h4>{title}</h4>
                        </div>
                    }
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>,
        root
    );
});
