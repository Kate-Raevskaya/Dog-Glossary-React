import {users} from "./users";

export default class userService {
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