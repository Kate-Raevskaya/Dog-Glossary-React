import {Outlet} from "react-router-dom";
import {NavLink} from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav>
                <NavLink to={''}>Search Dog</NavLink>
                <NavLink to={'login'}>Log in</NavLink>
                <NavLink to={'private-route'}>Saved</NavLink>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}