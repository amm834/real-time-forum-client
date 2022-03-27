import {createStore} from "vuex";

export default createStore({
    state: {
        isLoggedIn: false,
    },
    mutations: {
        setLoggedIn(state, payload) {
            state.isLoggedIn = payload
        },

    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
    }
})