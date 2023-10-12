import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";
import {useContext, useEffect, useState} from "react";
import AuthService from "../AuthService";
import './root.scss';

export default function Root() {
    let auth = useContext(AuthContext)
    let navigate = useNavigate()

    const [scrollTop, setScrollTop] = useState(0);
    const [smallNavbar, setSmallNavbar] = useState(false);


    useEffect(() => {
        function handleScroll(event) {
            setScrollTop(window.scrollY)
            setSmallNavbar(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function handleLogOut() {
        auth.setIsAuth(false)
        AuthService.logOut()
        setSmallNavbar(false)

        navigate('/login')
    }

    return (
        <>
            <nav className={scrollTop > 0 ? 'small-nav' : undefined}>
                <div
                    className='burger-btn'
                    onClick={() => setSmallNavbar(!smallNavbar)}
                >
                    <span />
                </div>
                <div className={smallNavbar ? 'small-navbar' : 'navbar'}>
                    <div id='pages'>
                        <NavLink to={'search'} onClick={() => setSmallNavbar(false)}>Search Dog</NavLink>
                        <NavLink to={'saved'} onClick={() => setSmallNavbar(false)}>Saved</NavLink>
                        {!auth.isAuth && <NavLink to={'login'} onClick={() => setSmallNavbar(false)}>Log in</NavLink>}
                    </div>
                    {auth.isAuth &&
                        <div
                            onClick={handleLogOut}
                            className='log-out-button'
                        >
                            Log out
                        </div>}
                </div>
            </nav>
            <div
                id='main-section'
                onClick={() => setSmallNavbar(false)}
            >
                <Outlet/>
            </div>
        </>
    )
}