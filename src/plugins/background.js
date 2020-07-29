const _ = require('lodash');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = function({ addUtilities, e, theme, variants }) {
  const colors = flattenColorPalette(theme('backgroundColor'))

  const getProperties = value => {
    return { 'background': value }
  }

  const utilities = _.fromPairs(
    _.map(colors, (value, modifier) => {
      return [`.${e(`bg-${modifier}`)}`, getProperties(value)]
    })
  )

  addUtilities(utilities, variants('backgroundColor'))
}
