import {BaseCard} from "./BaseCard";
import profilePicture from "../assets/img/user.png";
import React from "react";
import {useTranslation} from "react-i18next";
import {useModal} from "../hooks/useModal";

export default function User({user}) {
    const userImage = user?.image ? user?.image :profilePicture;
    const [t] = useTranslation();

    const { onOpen: openEditUser } = useModal('User-Edit');

    const clickHandler = (event) => {
        openEditUser(event, user);
    }

    return(
        <BaseCard>
            <div onClick={clickHandler}>
                <img src={userImage} className="w-full rounded-lg card-cover"/>
                <div className="mt-4 flex flex-col">
                    <p className="font-semibold text-lg text-white truncate">
                        {user.name}
                    </p>

                    <p className="text-sm truncate text-gray-300 mt-1">
                        {user.is_admin == 1 && t('userList.admin')}
                        {user.is_admin == 0 && t('userList.user')}
                    </p>

                </div>
            </div>


        </BaseCard>
    );

}
