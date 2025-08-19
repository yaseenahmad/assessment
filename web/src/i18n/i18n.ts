import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      global: {
        logo: 'Logo',
        light: 'Light',
        dark: 'Dark',
        system: 'System',
        english: 'English',
        spanish: 'Spanish',
      },
      home: {
        heading: 'Welcome to Our App',
        description: 'This is the home page with file-based routing!',
        meta: {
          title: 'home page',
          description: 'Welcome to our application homepage'
        }
      },
      about: {
        heading: 'About Us',
        description: 'Learn more about our company and mission.',
        meta: {
          title: 'About Us',
          description: 'Learn more about our company'
        }
      },
    }
  },
  es: {
    translation: {
      global: {
        logo: 'Logo',
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema',
        english: 'Inglés',
        spanish: 'Español',
      },
      home: {
        heading: 'Bienvenido a Nuestra Aplicación',
        description: '¡Esta es la página de inicio con enrutamiento basado en archivos!',
        meta: {
          title: 'página de inicio',
          description: 'Bienvenido a la página principal de nuestra aplicación'
        }
      },
      about: {
        heading: 'Sobre Nosotros',
        description: 'Conozca más sobre nuestra empresa y misión.',
        meta: {
          title: 'Sobre Nosotros',
          description: 'Conozca más sobre nuestra empresa'
        }
      },
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
