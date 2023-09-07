import {useEffect, useState} from "react";
import {users} from "./users";
import AuthService from "./AuthService";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        // TODO: use me
        // let auth = AuthService.isAuthed()
        // setIsAuth(auth);
        let userData = localStorage.getItem('login:password')

        if(userData) {
            let auth = users.some(user =>
                `${user.login}:${user.password}` === userData)
            setIsAuth(auth)
        }
    }, [])


    return isAuth
}