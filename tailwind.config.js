/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {},
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
        'screen-small': [
          '100vh /* fallback for Opera, IE and etc. */',
          '100svh',
        ],
        'screen-large': [
          '100vh /* fallback for Opera, IE and etc. */',
          '100lvh',
        ],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
