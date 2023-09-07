import {Form, redirect, useActionData} from "react-router-dom";
import AuthService from "../AuthService";

export async function action({request}) {
    const formData = await request.formData()
    let userCredential = Object.fromEntries(formData)
    if (AuthService.login(userCredential.login, userCredential.password)) {
        return redirect('/private-route')
    } else {
        return null
    }
}

export default function Login() {
    let info = useActionData()

    return (
        <>
            <h1>LOG IN</h1>
            <Form method='post'>
                <label>
                    Login
                    <input
                        type='text'
                        placeholder='login'
                        name='login'
                    />
                </label>
                <label>
                    Password
                    <input
                        type='password'
                        placeholder='password'
                        name='password'
                    />
                </label>
                {info !== undefined && !info.isAuth && <p>Login or password isn't correct</p>}
                <button type='submit'>Log in</button>
            </Form>
        </>
    )
}