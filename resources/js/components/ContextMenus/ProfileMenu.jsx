import {Item, Menu, Separator, Submenu} from "react-contexify";
import {useModal} from "../../hooks/useModal";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../contexts/AuthContext";

export default function ProfileMenu({id}) {
    const { onOpen: openEditUser } = useModal('User-Edit');
    const [t] = useTranslation();
    const { handleLogout } = useAuth();
    const handleItemClick = ({ id, event, props, data }) => {
        switch (id) {
            case "edit":
                openEditUser(event,props);
                break;
            case "logout":
                handleLogout(event);
                break;
            default:
                break;
        }
    }

    return (
        <Menu id={id}>
            <Item id="edit" onClick={handleItemClick}>{t('context.edit_profile')}</Item>
            <Separator />
            <Item id="logout" onClick={handleItemClick}>{t('context.logout')}</Item>
        </Menu>
    );
}

