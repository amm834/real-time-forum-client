import axios from "axios";
import AppStorage from "./AppStorage";

export default new class User {
    async login(data) {
        try {
            const response = await axios.post('/api/auth/login', data)
            this.responseAfterLogin(response.data)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    async register(data) {
        try {
            const response = await axios.post('/api/auth/register', data)
            return this.login(data)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    responseAfterLogin(userData) {
        const {access_token, user} = userData;
        AppStorage.store(access_token, user)
    }

    isLoggedIn() {
        return AppStorage.getUser() !== null && AppStorage.getToken() !== null;
    }

    name() {
        return AppStorage.getUser().name;
    }

    logout() {
        AppStorage.clear();
    }
}
