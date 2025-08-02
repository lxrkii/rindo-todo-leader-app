/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#be185d',
          'pink-dark': '#9d174d',
          'pink-light': '#ec4899',
        },
        accent: {
          pink: '#f472b6',
        }
      },
    },
  },
  plugins: [],
}
