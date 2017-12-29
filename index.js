const { MultiLocale } = require('./locale')

async function main () {
  // Initialize the locale
  const locales = await MultiLocale()
  console.log('Printing english translations:')
  console.log('==============================')
  printTranslations(locales.get('en-SG'))

  // Change locale to indonesia
  // locale.changeLanguage('id')
  console.log('Printing indonesian translations:')
  console.log('================================')
  printTranslations(locales.get('id'))

  // Change locale to german
  console.log('Printing german translations:')
  console.log('============================')
  printTranslations(locales.get('de'))
}

function printTranslations (locale) {
  // Return translation by key
  console.log(locale.t('good_day'))
  console.log()

  // Return translation with dynamic variables
  console.log(locale.t('greeting', { name: 'John' }))
  console.log()

  // Translations by context
  console.log(locale.t('homepage_url'))
  console.log(locale.t('homepage_url', { context: 'malaysia' }))
  console.log(locale.t('homepage_url', { context: 'indonesia' }))
  console.log()

  // Nested objects in {locale}.json
  console.log(locale.t('button.sign_up'))
  console.log(locale.t('button.buy'))
  console.log(locale.t('button.see_more'))
  console.log()

  // Passing object in template, and format currency
  const coffee = {
    type: 'cappucino',
    // The price format is an object in the format { type: 'numeral', value: 1000 }
    price: {
      type: 'numeral',
      value: 100.0
    }
  }
  console.log(locale.t('buy_coffee', { coffee }))
  console.log()

  // Singular/Plural handling
  console.log(locale.t('job_message', { count: 1 })) // Singular
  console.log(locale.t('job_message', { count: 100 })) // Plural
  console.log()

  // Datetime formatting
  const date = { type: 'date', value: new Date() }
  console.log(locale.t('today_message', { date }))
  console.log()

  // Example of context
  console.log(locale.t('receive_message'))
  console.log(locale.t('receive_message', { context: 'email' }))
  console.log(locale.t('receive_message', { context: 'facebook' }))
}

main()
.catch(console.error)
