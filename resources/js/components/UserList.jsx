import User from "./User";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {PlayerAPI} from "../api/PlayerAPI";

export default function UserList() {
    const [t] = useTranslation();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {
        setIsLoading(true);
        PlayerAPI.getUsers().then((user) => {
            // response handling
            setItems(user.data)
            setIsLoading(false);
        })
    }, []);
    return(
        <>
            <h2 className="mt-4 mb-2">{t('userList.title')}</h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-2">
                {items?.map((user, i) => (
                    <User user={user} key={user.id}/>
                ))}
            </div>
        </>
    );

}
