import {useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";
import {useContext} from "react";

export default function PrivateRoute({children}) {
    let {isAuth} = useContext(AuthContext)
    let navigate = useNavigate()

    return (
        <>
            {isAuth ? children :
                <div>
                    <p>You're not authorized!</p>
                    <button onClick={() => navigate('/login')}>Log in</button>
                </div>
            }
        </>
    )
}