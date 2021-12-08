import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'  //making available to vue app main... 

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.mount('#app')

