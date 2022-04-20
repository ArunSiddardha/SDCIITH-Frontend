const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        startblue:'rgb(21,5,37)',
        headerwhite:'rgb(242,239,225)',
        team:'rgb(53,15,62)',
        events: '#80295D',
        gold : '#FFD700',
        proshows : '#622980',
        competitions : '#1E0735',
        compButton:'rgba(196, 196, 196, 0.22)',

      },
      screens: {
        ...defaultTheme.screens,
        'xs':'540px',
      },
    },
  },
  plugins: [],
};
