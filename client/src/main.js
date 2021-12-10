// these import are telling vue where to go to get the data?
import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'  //making available to vue app main... 

import router from '@/router' //list of routers from router availble

let app = createApp(App) //telling to use vue.

app.use(router) //telling to use router.

app.config.globalProperties.$stateService = StateAPIService

app.mount('#app')

