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

    static logOut() {
        localStorage.removeItem('login:password')
    }

    static getUsersDogs() {
        let userData = localStorage.getItem('login:password')

        let login = userData.split(':')[0]
        let password = userData.split(':')[1]

        for(let user of users) {
            if(user.login === login && user.password === password) {
                return user.dogs
            }
        }
    }
}