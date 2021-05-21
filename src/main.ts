import { createApp } from 'vue'
import store from './store'
// import installElementPlus from '@/util/elementPlus'
import ElementPlus from 'element-plus'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'

import './index.css'
import router from './router/index'

import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.productionTooltip = false
app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
app
  .use(ElementPlus, { locale })
  .use(store)
  .use(router)

app.mount('#app')
