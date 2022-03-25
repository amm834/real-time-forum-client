import 'vuetify/styles'
import {createApp} from 'vue'
import App from './App.vue'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import router from "./router";

const vuetify = createVuetify({
    icons: {
        iconfont: 'mdi',
    },
    components,
    directives
})


const app = createApp(App)
app.use(router)
app.use(vuetify)

app.mount('#app')