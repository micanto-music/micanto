import React, { createContext, useState, useEffect } from "react";

import {RouterProvider} from "react-router-dom";
import router from "../router";
import {AuthProvider} from "../contexts/AuthContext";
import {ToastContainer} from "react-toastify";
import {useTranslation} from "react-i18next";

function App() {
    const {t} = useTranslation();
    return (
        <AuthProvider>
            <RouterProvider router={router} />
            <ToastContainer
                position="bottom-center"
                stacked
                theme="colored"
            />
            <div id="loader">
                <div className="loader-inner">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    &nbsp; {t('pleasewait')}
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;
