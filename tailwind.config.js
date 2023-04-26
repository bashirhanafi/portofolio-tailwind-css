/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#0e7490",
        secondary: "#334155",
        dark: '#111827',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
