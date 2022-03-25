import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/Login.vue";
import App from "../App.vue";

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})