import { createApp } from 'vue'
import store from './store'
import installElementPlus from '@/util/elementPlus'
import 'element-plus/lib/theme-chalk/index.css'

import './index.css'
import router from './router/index'

import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.productionTooltip = false
app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
installElementPlus(app)
app
  .use(store)
  .use(router)

app.mount('#app')
