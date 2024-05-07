import Header from "../components/Header/Header";
import HeaderTitle from "../components/Header/HeaderTitle";
import Scroll from "../components/Scroll";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Sidebar from "../components/Sidebar";
import Page1 from "../components/Setup/Page1";
import Page2 from "../components/Setup/Page2";
import Page3 from "../components/Setup/Page3";
import Page4 from "../components/Setup/Page4";
import ProgressBar from "../components/Setup/ProgressBar";
import logo from "../assets/img/logo.svg";
import axios from "../axios";
import ActivityIndicator from "../components/ActivityIndicator";
import {Navigate} from "react-router-dom";

const Setup = () => {
    const [t] = useTranslation();
    const [page,setPage] = useState(1);
    const [checked, setChecked] = useState(false);
    const formNavigate = (page) => {
        setPage(page);
    }

    useEffect(() => {
        const checkInstall = async() => {
            const firstInstall = await axios.get('/api/checkSetup');
            setChecked(firstInstall.data);
        }
        checkInstall();
    }, []);

    if (checked !== false && checked !== 200) {
        return <Navigate to="/" />;
    }

    return (
        <section className="bg-music">
            {!checked && <div className="flex flex-col h-screen"><ActivityIndicator /></div>}
            {checked === 200 &&
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img src={logo} className="w-[150px] mb-3"/>
                <div className="multistep-form bg-music-light border-sidebar">
                    <ProgressBar page={page}/>
                    <Page1 navigate={formNavigate} page={page}/>
                    <Page2 navigate={formNavigate} page={page}/>
                    <Page3 navigate={formNavigate} page={page}/>
                    <Page4 navigate={formNavigate} page={page}/>
                </div>
            </div>
            }
        </section>
    )
}

export default Setup;
