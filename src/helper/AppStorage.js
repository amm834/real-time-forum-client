export default new class AppStorage {
    #token = null
    #user = null

    setToken(token) {
        this.#token = token;
        localStorage.setItem('token', this.#token)
    }

    setUser(user) {
        this.#user = JSON.stringify(user)
        localStorage.setItem('user', this.#user)
    }

    getToken() {
        this.#token = localStorage.getItem('token')
        return this.#token
    }

    getUser() {
        this.#user = JSON.parse(localStorage.getItem('user'))
        return this.#user
    }

    store(token, user) {
        this.setToken(token)
        this.setUser(user)
    }

    clear() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.#token = null
        this.#user = null
    }

    hasToken() {
        return this.#token !== null ?? false;
    }


}