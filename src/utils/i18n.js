import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enUS from '../locales/en-US.json'
import ptBR from '../locales/pt-BR.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-US', // ou 'pt-BR'
    debug: true,
    resources: {
      'en-US': {
        translation: enUS
      },
      'pt-BR': {
        translation: ptBR
      }
    }
  })

export default i18n
