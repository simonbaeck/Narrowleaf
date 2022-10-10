/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,js}",
        "./*/*.{html,js}",
    ],
    theme: {
      extend: {
        colors: {
          "mainColor": "#3eb54a",
          "secondColor": "#006635",
          "accentColor": ""
        }
      },  
    },
    plugins: [],
  }
