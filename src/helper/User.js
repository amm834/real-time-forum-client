import axios from "axios";
import AppStorage from "./AppStorage";

export default new class User {
    async login(data) {
        try {
            const response = await axios.post('/api/auth/login', data)
            this.responseAfterLogin(response.data)
        } catch (e) {
            console.log(e.response.data.errors)
        }
    }

    responseAfterLogin(userData) {
        const {access_token, user} = userData;
        AppStorage.store(access_token, user)
    }

    isLoggedIn() {
        return AppStorage.getUser() !== null && AppStorage.hasToken();
    }

    name() {
        return AppStorage.getUser().name;
    }

    logout() {
        AppStorage.clear();
    }
}
