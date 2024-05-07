import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export default function Page4({navigate, page}){
    const [t] = useTranslation();

    return(
        <div className={page !== 4 ? 'hidden' : ''}>
            <h2 className="mb-3">{t('setup.page4.title')}</h2>
            <p>{t('setup.page4.text')}</p>
            <div className="flex justify-center">
                <Link className="mt-3 btn btn-primary" to="/">Zum Login</Link>
            </div>
        </div>
    );

}
