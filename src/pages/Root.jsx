import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";
import {useContext} from "react";
import AuthService from "../AuthService";
import '../root.scss';

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
                <div id='navbar'>
                    <NavLink to={'search'}>Search Dog</NavLink>
                    <NavLink to={'saved'}>Saved</NavLink>
                    {!auth.isAuth && <NavLink to={'login'}>Log in</NavLink>}
                </div>
                {auth.isAuth && <button onClick={handleLogOut}>Log out</button>}
            </nav>
            <div id='main-section'>
                <Outlet />
            </div>
        </>
    )
}