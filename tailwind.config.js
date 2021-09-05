module.exports = {
  purge: ['./index.html', '.src/**/*.{vue, js, jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    opacity: ['hover', 'disabled']
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
