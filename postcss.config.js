module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('postcss-easy-import'),
    require('postcss-nested'),
    require('tailwindcss'),
  ]
}
