// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      // colors: {
      //   green: colors.emerald,
      //   yellow: colors.amber,
      //   purple: colors.violet,
      // },
    }
  },
  plugins: [],
  variants: {
    extend: {}
  }
}
