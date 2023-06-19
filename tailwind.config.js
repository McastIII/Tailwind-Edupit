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
      'todaybg': 'url("./img/shape.png")',
    },

    keyframes: {
      sliding1:{
        from: {
          left:'0',
        },
        to: {
          left:'100%',
        },
      },
      sliding2:{
        from: {
          right:'0',
        },
        to: {
          right:'100%',
        },
      }
    },
    animation:{
      sliding1: 'sliding1 3s linear infinite',
      sliding2: 'sliding2 3s linear infinite',
    }
  },
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}

