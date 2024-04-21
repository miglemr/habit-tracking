module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      colors: {
        'dark-blue': '#074785',
        'light-blue': '#29AEFD',
        'dark-orange': '#F1854F',
        'light-orange': '#F9D555',
        'stop-dark': '#cf142b',
        'stop-light': '#971f2e',

      }
    },
  },
  variants: {
    extend: {

    },
  },
  /* eslint-disable global-require */
  plugins: [require('@tailwindcss/forms')],
}

