/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayBlue: {
          100: 'hsl(233, 8%, 79%)',
          200: 'hsl(236, 13%, 42%)',
          300: 'hsl(240, 100%, 5%)'
        }
      }
    },
  },
  plugins: [],
}

