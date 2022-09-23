import { useContext } from "react";
import { AuthContext } from "./AuthContext";
// import { LogIn } from "../../pages/login";
import { LogIn } from "../../pages/login";

export const RequireAuth  = ({children}:{children:JSX.Element} ) => {

    const auth= useContext(AuthContext);

    if(!auth.user){
        return <LogIn />
    };

    return children;
    
};