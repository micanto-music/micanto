import React, {useEffect, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import logo from "../assets/img/logo.svg"
import {useTranslation} from "react-i18next";
import {IoIosAlert} from "react-icons/io";
import ActivityIndicator from "../components/ActivityIndicator";

export default function Login() {
    const { setUser, csrfToken } = useAuth();
    const [checked, setChecked] = useState(false);
    const [error, setError] = React.useState(null);
    const [t] = useTranslation();
    // login user
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const body = {
            email: email.value,
            password: password.value,
        };
        await csrfToken();
        try {
            const resp = await axios.post('/api/loginWithCookie', body);
            if (resp.status === 200) {
                setUser(resp.data.user);
                return <Navigate to="/profile" />;
            }
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 422) {
                setError(t('login.invalid'));
            }
        }
    };

    useEffect(() => {
        const checkInstall = async() => {
            const firstInstall = await axios.get('/api/checkSetup');
            setChecked(firstInstall.data);
        }
        checkInstall();
    }, []);

    if (checked === 200) {
        return <Navigate to="/setup" />;
    }

    return (
        <section className="bg-music">
            {!checked && <div className="flex flex-col h-screen"><ActivityIndicator /></div>}
            {checked !== 200 &&
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="/"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src={logo} className="w-[150px]"/>
                </a>
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-music-light border-sidebar">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            {t('login.sign_in')}
                        </h1>
                        {error && (
                            <div
                                className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                                role="alert">
                                <IoIosAlert size={20} className="mr-2"/>
                                <span className="sr-only">Info</span>
                                <div>{error}</div>
                            </div>
                        )}

                        <form
                            className="space-y-4 md:space-y-6"
                            action="#"
                            method="post"
                            onSubmit={handleSubmit}>
                            <div className="form-field">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {t('login.email')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full form-input"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {t('login.password')}
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="w-full form-input"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full">
                                {t('login.sign_in_btn')}
                            </button>
                        </form>
                    </div>
                </div>
            </div> }
        </section>
    );
}
