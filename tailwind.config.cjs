/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
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
        black: '#000',
        hover: '#ff0000'
      },
      animation: {
        smoky: 'smoky 0.5s ease-out forwards'
      },

      boxShadow: {
        custom: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      },
      height: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '400px': '400px'
      }
    }
  },
  plugins: []
};
