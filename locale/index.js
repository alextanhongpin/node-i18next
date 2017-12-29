
const i18next = require('i18next')
const moment = require('moment')
const numeral = require('./numeral')

// Load resources
const english = require('./resource/en-SG.json')
const german = require('./resource/de.json')
const indonesia = require('./resource/id.json')

async function Locale (lng, resource) {
  const options = {
    lng,
    resources: {
      [lng]: resource
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

  return new Promise((resolve, reject) => {
    const instance = i18next.createInstance()
    instance.init(options, (error, t) => {
      error ? reject(error) : resolve(t)
    })
  })
}

// Create new instances of locales to avoid race condition - when serving multiple requests,
// changing the locale will affect other requests that is performing the translation
async function MultiLocale () {
  const translations = {
    'en-SG': await Locale('en-SG', english),
    id: await Locale('id', indonesia),
    de: await Locale('de', german)
  }

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
