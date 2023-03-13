import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import VueKinesis from 'vue-kinesis'

import './style.css'

import { supabase } from "./supabase";

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig)
app.use(VueKinesis)

app.mount('#app')