import React, { createContext, useEffect, useState } from "react";
import { FC, ReactNode } from "react";

type AuthCtx = {
    token?: string
    saveTokenFunc: (bearerToken: string) => void
    clearTokenFunc: () => void
}

const dummyFunc = () => {
    return
}

export const AuthContext = createContext<AuthCtx>({ saveTokenFunc: dummyFunc, clearTokenFunc: dummyFunc });

export const AuthProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const storedToken = localStorage.getItem('bearerToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const saveToken = (bearerToken: string) => {
        setToken(bearerToken);
        localStorage.setItem('bearerToken', bearerToken);
    };

    const clearToken = () => {
        setToken("");
        localStorage.removeItem('bearerToken');
    };

    return (
        <AuthContext.Provider value={{ token, saveTokenFunc: saveToken, clearTokenFunc: clearToken }}>
            {children}
        </AuthContext.Provider>
    )
};