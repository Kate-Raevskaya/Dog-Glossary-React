import {Form, useActionData} from "react-router-dom";
import AuthService from "../AuthService";
import './login.scss';

export function action({setIsAuth}) {
    return async function ({request}) {
        const formData = await request.formData()
        let userCredential = Object.fromEntries(formData)
        if (AuthService.login(userCredential.login, userCredential.password)) {
            setIsAuth(true)
            window.history.back()
            return null
        } else {
            return null
        }
    }
}


export default function Login() {
    let info = useActionData()

    return (
        <div id='login-page'>
            <div id='login-card'>
                <h1>LOG IN</h1>
                <Form method='post'>
                    <label>
                        Login
                        <input
                            type='text'
                            placeholder='test1'
                            name='login'
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type='password'
                            placeholder='test1'
                            name='password'
                        />
                    </label>
                    {info !== undefined && info === null && <p>Login or password isn't correct</p>}
                    <div className="login-button-container">
                        <button type='submit' className="login-button">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                            <span className="button-text">LOG IN</span>
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}