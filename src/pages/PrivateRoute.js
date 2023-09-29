import {useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContext";
import {useContext} from "react";
import '../errorPage.scss';

export default function PrivateRoute({children}) {
    let {isAuth} = useContext(AuthContext)
    let navigate = useNavigate()

    return (
        <>
            {isAuth ? children :
                <div className='not-auth-message'>
                    <p>You're not authorized!</p>
                    <div className="login-button-container">
                        <button
                            className="login-button"
                            onClick={() => navigate('/login')}
                        >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                            <span className="button-text">LOG IN</span>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}