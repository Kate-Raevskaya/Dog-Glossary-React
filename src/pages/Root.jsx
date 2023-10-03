import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";
import {useContext, useEffect, useState} from "react";
import AuthService from "../AuthService";
import '../root.scss';

export default function Root() {
    let auth = useContext(AuthContext)
    let navigate = useNavigate()

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function handleScroll(event) {
            setScrollTop(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {window.removeEventListener('scroll', handleScroll)}
    }, [])

    function handleLogOut() {
        auth.setIsAuth(false)
        AuthService.logOut()
        navigate('/login')
    }

    return (
        <>
            <nav className={scrollTop > 0 ? 'small-nav' : undefined}>
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