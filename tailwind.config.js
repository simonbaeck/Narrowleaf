/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,js,css}",
        "./*/*.{html,js,css}",
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
