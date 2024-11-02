/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'abu': '#EBEEF1',
        'biru': '#304966'
      }
    },
  },
  plugins: [],
}

