import { createApp } from 'vue'
import App from './App.vue'
import Api from './utils.index'

const app = createApp(App)
app.config.globalProperties.$api = Api
app.mount('#app')
