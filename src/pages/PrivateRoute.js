import {useAuth} from '../useAuth';
import {useNavigate} from "react-router-dom";

export default function PrivateRoute({children}) {
    let isAuth = useAuth()
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