import axios from "axios";

export default new class User {
    async login(data) {
        try {
            const response = await axios.post('/api/auth/login', data)
            console.log(response.data)
        } catch (e) {
            console.log(e.response.data.errors)
        }
    }
}
