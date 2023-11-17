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
        'hand': ['Indie Flower', 'handlee'],
      },
      colors: {
        'customlime': '#f2ffe6',
        'customgreen':'#93ca42',
        'customyellow':'#fdf2b7',
        'customorange':'#f9d175',
        'customblue':'#68aaf7',
        'customtop':'#f2ffe6',
        'custommiddle':'#f9f7f3',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in-left': 'slideInFromLeft 0.5s ease-out',
        'slide-out-right': 'slideOutToRight 0.5s ease-out'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
