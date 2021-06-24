const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    safelist: [
      'bg-green-200',
      'bg-purple-200',
      'bg-red-200',
      'bg-yellow-200',
      'bg-blue-200',
      'text-green-600',
      'text-purple-600',
      'text-red-600',
      'text-yellow-600',
      'text-blue-600'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      red: colors.rose,
      blue: colors.blue,
      purple: colors.violet,
      green: colors.emerald,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
