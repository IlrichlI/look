import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import { i18next } from '@rich/utils'
import I18NextVue from 'i18next-vue'

import 'ant-design-vue/dist/antd.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(Antd)

app.use(I18NextVue, { i18next })

app.mount('#app')
