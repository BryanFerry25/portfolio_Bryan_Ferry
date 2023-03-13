/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-light": "#02060C",
        "black-fond":"#00070E"
      },
      
      "fontFamily": {
        "mrs-saint-delafield": 'Mrs Saint Delafield',
        "syncopate": 'Syncopate',
        "unbounded": 'Unbounded',
        "portico-outline": "Outline",
        "portico-inline": "porticoregular",
        "Metal_Mania": "Metal Mania",
      },
    },
  },
  plugins: [require("daisyui")],
}
