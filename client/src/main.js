// these imports are telling vue where to go to get the data?
import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'  //making available to vue app main... 

import router from '@/router' //list of routers from router availble

import 'leaflet/dist/leaflet.css'

let app = createApp(App) //telling to use vue.

app.config.globalProperties.$stateService = StateAPIService

app.use(router) //telling to use router.

app.mount('#app')

