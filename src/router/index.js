import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Forum from "../components/Forum.vue";
import Logout from "../components/Logout.vue";
import SingleQuestion from "../components/SingleQuestion.vue";
import AskQuestion from "../components/AskQuestion.vue";
import EditQuestion from "../components/EditQuestion.vue";
import Category from "../components/Category.vue";
import EditCategory from "../components/EditCategory.vue";

const routes = [
    // main
    {
        path: '/',
        component: Forum,
        name: 'home'
    },
    // auth
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
        path: '/logout',
        component: Logout,
        name: 'logout'
    },
    // question
    {
        path: '/forum',
        component: Forum,
        name: 'forum'
    },
    {
        path: '/questions/:slug',
        component: SingleQuestion,
        name: 'questions'
    },
    {
        path: '/questions/:slug/edit',
        component: EditQuestion,
        name: 'questions.edit'
    },
    // ask-question
    {
        path: '/ask-question',
        component: AskQuestion,
        name: 'questions.ask'
    },
    // categories
    {
        path: '/categories',
        component: Category,
        name: 'categories'
    },
    {
        path: '/categories/:slug/edit',
        component: EditCategory,
        name: 'categories.edit'
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;