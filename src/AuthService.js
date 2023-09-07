import {users} from "./users";

export default class AuthService {
    static login(login, password) {
        if (users.some(user =>
            user.login === login && user.password === password)) {
            localStorage.setItem('login:password', `${login}:${password}`)
            return true
        } else {
            return false
        }
    }
}