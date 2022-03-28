import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'nprogress/nprogress.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from "./router";
import axios from "axios";
import User from './helper/User'
import store from "./store";
import nProgress from './plugins/n-progress'

nProgress(router)

const vuetify = createVuetify({
    icons: {
        iconfont: 'mdi',
    },
    components,
    directives
})

axios.create({
    headers: {
        'Accept': 'application/json'
    }
})

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

window.User = User;

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app')