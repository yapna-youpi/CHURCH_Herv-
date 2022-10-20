/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blu': '#0f394c',
        'big': '#FBF8F1',
        'blac': '#240C00',
        'maron': '#674F44',
        'transluce': '#ececea',
        'orag': '#C19220',
        'hardOrag': '#e1b12c',
        'softBlack': '#333',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
