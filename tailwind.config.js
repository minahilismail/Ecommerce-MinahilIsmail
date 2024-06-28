/** @type {import('tailwindcss').Config} */
const colors = require('./src/constants/colors.js');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        ...colors,
      },
      fontFamily:{
        Poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}

