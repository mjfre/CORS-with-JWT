import axios from 'axios'
const API_URL = 'http://localhost:8080'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    login(username, password){
        const user = {
            username: username,
            password: password
        };
        return fetch('/login', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(user)
        })     
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/login`, {
            username,
            password
        })
    }
    registerSuccessfulLoginForJwt(username, token) {
        //console.log(this.createJWTToken(token));
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }
    createJWTToken(token) {
        return 'Bearer ' + token
    }
    
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

}

export default new AuthenticationService();