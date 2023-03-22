import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'
import './styles/index.scss'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(router)
app.use(store)
app.use(elementPlus)
app.mount('#app')