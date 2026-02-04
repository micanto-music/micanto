import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router";
import { AuthProvider } from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

function App() {
    const { t } = useTranslation();
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
}

export default App;
