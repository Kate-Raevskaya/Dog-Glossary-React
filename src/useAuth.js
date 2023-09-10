import {useEffect, useState} from "react";
import AuthService from "./AuthService";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false)

    console.log("hres")

    useEffect(() => {
        let auth = AuthService.isAuthed()
        setIsAuth(auth);
    }, [])

    return {isAuth, setIsAuth}
}