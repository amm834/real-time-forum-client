import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/Login.vue";
import AppHome from "../components/AppHome.vue";
import Register from "../components/Register.vue";
import Forum from "../components/Forum.vue";

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
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/forum',
        component: Forum,
        name: 'forum'
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})