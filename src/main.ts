import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import Antd from "ant-design-vue";
import { createI18n } from 'vue-i18n'

import "ant-design-vue/dist/antd.css";
import './assets/main.css'

const messages = {
        en: {
                message: {
                        hello: 'hello world'
                }
        },
        fa: {
                message: {
                        hello: 'سلام دنیا!'
                }
        }
}

const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'fa', // set locale
        fallbackLocale: 'en', // set fallback locale
        messages, // set locale messages
        // If you need to specify other options, you can set other options
        // ...
})

const app = createApp(App)

app.use(router)

app.use(Antd)

app.use(i18n)

app.mount('#app')
