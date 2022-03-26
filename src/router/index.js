import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/Login.vue";
import AppHome from "../components/AppHome.vue";

const routes = [
    {
        path: '/',
        component: AppHome,
        name: 'home'
    },
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