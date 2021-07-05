import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from '@/router'
import '@/style/normalize.css'
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';

const app = createApp(App)
app.use(VueRouter)
app.use(ElementPlus, { size: 'small' })
app.mount('#app')
