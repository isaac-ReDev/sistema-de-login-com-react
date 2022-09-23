import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";

export const Privite = () => {
    const auth = useContext(AuthContext);

    return(
        <>
            <h2>Privete</h2>
            <div>
                <span>Ola, {auth.user?.name}</span>
            </div>
        </>
    );
};