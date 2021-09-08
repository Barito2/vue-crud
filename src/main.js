import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routers'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

createApp(App).use(router).use(store).mount('#app')
