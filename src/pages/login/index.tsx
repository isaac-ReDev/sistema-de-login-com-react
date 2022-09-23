import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";


export const LogIn = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async () => {
        if(email && password){
            const isLoggied = await auth.signIn(email, password);

            if(isLoggied){
                navigate("/");
            }else{
                alert("Email ou senha incorrero!");
            }
        };
    };

    return(
        <div>
            <h2>Closed page</h2>
            <div>
                <label>Your Email</label>
                <input 
                    type="email" 
                    name="name" 
                    id="name" 
                    placeholder="Your email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Your Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Your password" 
                    value={password} 
                    onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <button onClick={handleLogin } >Send</button>
        </div>
    )
};