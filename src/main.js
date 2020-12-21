import { createApp } from 'vue'
import store from './store'
import ElementUIPLUS from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import './index.css'
import router from './router/index'

import App from './App.vue'

const app = createApp(App)

app.config.productionTip = false

app
  .use(ElementUIPLUS, { size: 'small', zIndex: 3000 })
  .use(store)
  .use(router)

app.mount('#app')
