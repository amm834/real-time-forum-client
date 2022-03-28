import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state: {
        isLoggedIn: false,
        categories: [],
        errors: {}
    },
    mutations: {
        setLoggedIn(state, payload) {
            state.isLoggedIn = payload
        },
    },
    actions: {
        async getAllCategories({state}) {
            try {
                const response = await axios.get('/api/categories')
                state.categories = response.data.data
            } catch (e) {
                state.errors = e.response.data.errors
            }
        },

    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        categories(state) {
            return state.categories;
        },
        errors(state) {
            return state.errors;
        }
    }
})