const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      xs: { max: '639px' },
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'main-light': '#AECE00',
      'main-dark': '#009249',
      'text-highlight': '#00582A',
    },
    fontFamily: {
      noto: ['"Noto Sans KR"', 'sans-serif'],
      jua: ['Jua', 'sans-serif'],
      dohyeon: ['"Do Hyeon"', 'sans-serif'],
    },
  },
  plugins: [],
};
