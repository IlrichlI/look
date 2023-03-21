import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import Antd from "ant-design-vue";
import { i18n } from '@rich/utils';

import "ant-design-vue/dist/antd.css";
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(Antd)

app.use(i18n)

app.mount('#app')
