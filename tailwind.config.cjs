/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        background: '#0f0f0f',
        primary: '#ff0000',
        text: '#fff',
        white: '#fff',
        black: '#000'
      },
      boxShadow: {
        custom: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      }
    }
  },
  plugins: []
};
