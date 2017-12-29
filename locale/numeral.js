const numeral = require('numeral')

// Full format for formatting currency
// numeral.register('locale', 'fr', {
//   delimiters: {
//     thousands: ' ',
//     decimal: ','
//   },
//   abbreviations: {
//     thousand: 'k',
//     million: 'm',
//     billion: 'b',
//     trillion: 't'
//   },
//   ordinal: function (number) {
//     return number === 1 ? 'er' : 'ème'
//   },
//   currency: {
//     symbol: '€'
//   }
// })

// // switch between locales
// numeral.locale('en-MY')

numeral.register('locale', 'en-SG', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  currency: {
    symbol: 'MYR'
  }
})

numeral.register('locale', 'id', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  currency: {
    symbol: 'IDR'
  }
})

numeral.register('locale', 'de', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  currency: {
    symbol: 'EUR'
  }
})

module.exports = numeral
