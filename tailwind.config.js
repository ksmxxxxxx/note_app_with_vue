module.exports = {
  purge: ['./index.html', '.src/**/*.{vue, js, jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
