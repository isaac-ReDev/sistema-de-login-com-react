import {  useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthContextProvider = ( {children}: {children: JSX.Element} ) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();


    //* validar token
    useEffect(() => {
        const validateToken = async () => {
            const storangeData = localStorage.getItem("authToken");
            if(storangeData){
                const data = await api.validateToken(storangeData);
                if(data.user){
                    setUser(data.user);
                }
            }
        };
        validateToken();
    },[api]);

    const signIn = async (email:string, password:string) =>{
        const data = await api.sigIn(email, password);
        if(data.user && data.token){
            setUser(data.user);
            SetToken(data.token);
            return true;
        }
        return false;
    };

    const signOut = async () =>  {
        // return {status:true}
        await api.logout();
        setUser(null);
        SetToken("");

    }

    const SetToken = (token:string) => {
        localStorage.setItem("authToken", token);
    };

    return(
        <AuthContext.Provider value={{user, signIn, signOut}} >
             {children}
        </AuthContext.Provider>
    );
}; 