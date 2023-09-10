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

    static isAuthed() {
        let userData = localStorage.getItem('login:password')

        if(userData) {
            return users.some(user =>
                `${user.login}:${user.password}` === userData)
        }
        return false
    }
}