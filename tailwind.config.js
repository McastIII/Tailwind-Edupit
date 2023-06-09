/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      dark:'#323232',
      light:'#ffffff',
      primary:'#0EB582',
      grey: '#f6f6f6',
    },

    fontFamily: {
      'Poppins' :['Poppins', 'sans-serif']
    },

    backgroundImage: {
      'slider1': 'url("./img/slider-bg2.jpg")',
    },
  },
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}

