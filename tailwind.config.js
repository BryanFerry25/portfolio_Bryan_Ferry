/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-light": "#02060C"
      },
      "fontFamily": {
        "mrs-saint-delafield": 'Mrs Saint Delafield',
        "syncopate": 'Syncopate',
        "unbounded": 'Unbounded',
        "portico-outline": "Outline",
        "portico-inline": "Inline"
      },
    },
  },
  plugins: [require("daisyui")],
}
