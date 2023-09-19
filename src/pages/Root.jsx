import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";
import {useContext} from "react";
import AuthService from "../AuthService";

export default function Root() {
    let auth = useContext(AuthContext)
    let navigate = useNavigate()

    function handleLogOut() {
        auth.setIsAuth(false)
        AuthService.logOut()
        navigate('/login')
    }

    return (
        <>
            <nav>
                <NavLink to={''}>Search Dog</NavLink>
                <NavLink to={'login'}>Log in</NavLink>
                <NavLink to={'saved'}>Saved</NavLink>
                {auth.isAuth && <button onClick={handleLogOut}>Log out</button>}
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}