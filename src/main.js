import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import VueKinesis from 'vue-kinesis'
import VWave from 'v-wave'
import 'animate.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import './style.css'

import { supabase } from "./supabase";

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig)
app.use(VueKinesis)
app.use(VWave)


app.mount('#app')



