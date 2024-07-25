/** @type {import('tailwindcss').Config} */
const colors = require('./src/constants/colors');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   // 'xs': {'min': '640px', 'max': '767px'},
    //   // // => @media (min-width: 640px and max-width: 767px) { ... }

    //   // 'md': {'min': '768px', 'max': '1023px'},
    //   // // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   // 'lg': {'min': '1024px', 'max': '1279px'},
    //   // // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   'xxl': {'min': '1440px'},
    //   // => @media (min-width: 1440px) { ... }

    //   // 'small': {'min': 'px'},
    //   // // => @media (min-width: 1536px) { ... }
    //   'tablet': {'min': '768', 'max':'832'},
    //   // => @media (min-width: 1536px) { ... }
      
    // },
    extend: {
      screens:{
        'xxl': {'min': '1440px'},
           // => @media (min-width: 1440px) { ... }
        'xxs': {'min': '310px', 'max':'374px'},
           // => @media (min-width: 1440px) { ... }
      },
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

