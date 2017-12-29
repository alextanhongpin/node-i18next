
const i18next = require('i18next')
const moment = require('moment')
const numeral = require('./numeral')

async function Locale (lng = 'en-SG') {
  const options = {
    lng, // Default locale
    fallbackLng: 'en-SG', // Fallback to english locale
    debug: false,
    resources: {
      'en-SG': require('./resource/en-SG.json'),
      id: require('./resource/id.json'),
      de: require('./resource/de.json')
    },
    // Add interpolation for moment.js, numeral.js and intl api
    interpolation: {
      format (param, format, lng) {
        if (param && param.type === 'date') {
          return moment(param.value).locale(lng).format(format)
        }

        if (param && param.type === 'numeral') {
          numeral.locale(lng)
          return numeral(param.value).format(format)
        }
        return param
      }
    }
  }

  // There are severals events that you can subscribe to.
  // i18next.on('initialized', () => console.log('i18next:initialized\n'))
  // i18next.on('loaded', () => console.log('i18next:loaded\n'))
  // i18next.on('failedLoading', () => console.log('i18next:failedLoading\n'))
  // i18next.on('missingKey', () => console.log('i18next:missingKey\n'))
  // i18next.on('added', () => console.log('i18next:added\n'))
  // i18next.on('removed', () => console.log('i18next:removed\n'))

  return new Promise((resolve, reject) => {
    const instance = i18next.createInstance()
    // Don't change locale globally - it will affect other translations
    // instance.on('languageChanged', (lng) => {
    //   console.log(`i18next:languageChanged => ${lng}\n`)
    //   moment.locale(lng)
    //   numeral.locale(lng)
    // })
    instance.init(options, (error, t) => {
      error ? reject(error) : resolve(instance)
    })
  })
}

// Create new instances of locales to avoid race condition - when serving multiple requests,
// changing the locale will affect other requests that is performing the translation
async function MultiLocale () {
  const locales = [
    { 'en-SG': await Locale('en-SG') },
    { id: await Locale('id') },
    { de: await Locale('de') }
  ]
  const translations = locales.reduce((a, b) => Object.assign(a, b), {})
  return {
    get (lng) {
      const translation = translations[lng]
      if (!translation) {
        throw new Error(`locale with the language ${lng} does not exist`)
      }
      return translation
    }
  }
}

module.exports = {
  Locale,
  MultiLocale
}
