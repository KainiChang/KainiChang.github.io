module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '200': '800px', // 512px
        '100': '400px', // 256px
      },
      width: {
        '200': '800px', // 512px
        '100': '400px', // 256px
      },
      fontFamily: {
        'handlee': ['Handlee', 'cursive'],
      },
      color: {
        'lime': '#f2ffe6',
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
