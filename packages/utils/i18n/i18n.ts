
import { inject } from 'vue'
import { createI18n, type ComposerTranslation } from 'vue-i18n'
import fa from '@/i18n/fa.json'
import en from '@/i18n/en.json'

const messages = { fa, en }

const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'fa',
        fallbackLocale: 'en',
        messages,
})

export const useTranslate = () => {
        
        const translate = inject('translate') as ComposerTranslation<{}, string, 'fa' | 'en', never, never, never>
            
        
        return { translate }
}

export default i18n