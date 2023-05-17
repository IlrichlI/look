import i18next from 'i18next'
import fa from '@/i18n/fa.json'
import en from '@/i18n/en.json'

i18next.init({
  lng: 'fa',
  fallbackLng: 'fa',
  resources: {
    fa: { translation: fa },
    en: { translation: en }
  },
  // debug: process.env.NODE_ENV === "development",
  detection: {
    caches: ['localStorage', 'cookie'],
    lookupLocalStorage: 'lng',
    lookupCookie: 'lng',
    cookieMinutes: 1000,
    order: ['localStorage', 'cookie']
  },
  interpolation: {
    escapeValue: false
  }
})

const addTranslationSchema = (locale: 'fa' | 'en', resources: any) => {
  i18next.addResourceBundle(locale, 'translation', resources, true, true)
}

export { i18next, addTranslationSchema }
