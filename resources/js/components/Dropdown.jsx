import * as React from 'react';
import { Item, Menu, useContextMenu } from 'react-contexify';
// import { Chevron } from './Chevron';

export function Dropdown({id, children, props }) {
    const [isVisible, setVisibility] = React.useState(false);
    const MenuPosition = React.useRef();
    const triggerRef = React.useRef();
    const { show, hideAll } = useContextMenu({ id });

    function getMenuPosition() {
        const { left, bottom } = triggerRef.current.getBoundingClientRect();
        MenuPosition.current = { x: left, y: bottom + 8 };

        return MenuPosition.current;
    }

    function handleMenuTrigger(e) {
        if (isVisible) {
            hideAll();
            return;
        }

        show({
            event: e,
            position: getMenuPosition(),
            props: props
        });
    }

    function toggleVisibility(isVisible) {
        setVisibility(isVisible);
    }

    return (
        <div ref={triggerRef} onClick={handleMenuTrigger} className="cursor-pointer">
            {children}
        </div>
    );
}

const Emoji = ({ children }) => (
    <span role="icon" className="emoji">
    {children}
  </span>
);
