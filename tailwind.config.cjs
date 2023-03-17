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
        '195px': '195px',
        '400px': '400px',
        '400px': '400px'
      },
      width: {
        '195px': '195px',
        '600px': '600px'
      },
      borderWidth: {
        '12px': '12px'
      },
      animation: {
        zoomIn: 'zoomIn 250ms ease'
      },
      keyframes: {
        zoomIn: {
          from: {
            opacity: 0,
            transform: 'scale(0.85)'
          },
          to: {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      }
    }
  },
  plugins: []
};
