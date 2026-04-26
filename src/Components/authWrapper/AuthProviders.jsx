import React, { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (username) => {
        const loggedInUser = { username };

        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    const isAuthenticated = user !== null;
    return (
        <AuthContext.Provider 
            value={{user, login, logout, isAuthenticated}}>
                {children}
        </AuthContext.Provider>
    );
}   