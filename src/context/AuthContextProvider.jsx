import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [token, setToken] = useState("");


    function LoggedIn(token){
        setIsAuth(true)
        setToken(token)
    }

    function LogOut(){
        setIsAuth(false)
        setToken("")
    }


    return(
        <AuthContext.Provider value={{isAuth,loading,error,token,LoggedIn,LogOut,setLoading,setError,}}>
            {children}
        </AuthContext.Provider>
    )
}
