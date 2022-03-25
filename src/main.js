import 'vuetify/styles'
import {createApp} from 'vue'
import App from './App.vue'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import router from "./router";
import axios from "axios";

const vuetify = createVuetify({
    icons: {
        iconfont: 'mdi',
    },
    components,
    directives
})

window.axios = axios.create({
    headers: {
        'Accept': 'application/json',
    },
})

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

const app = createApp(App)
app.use(router)
app.use(vuetify)

app.mount('#app')