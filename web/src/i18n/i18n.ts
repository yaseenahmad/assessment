import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      story: 'On a quiet summer evening, Sofia sat by the window, watching the sun slowly disappear behind the mountains. She held a small notebook in her hands, writing down her dreams and hopes for the future. Every page was filled with determination, as if she was building a secret map toward the life she truly wanted.'
    }
  },
  es: {
    translation: {
      story: 'En una tranquila tarde de verano, Sofía se sentó junto a la ventana, observando cómo el sol desaparecía lentamente detrás de las montañas. Sostenía un pequeño cuaderno en sus manos, escribiendo sus sueños y esperanzas para el futuro. Cada página estaba llena de determinación, como si estuviera construyendo un mapa secreto hacia la vida que realmente deseaba.'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
