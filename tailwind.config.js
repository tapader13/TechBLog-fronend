/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#142030',
        tertiary: '#203656',
        quaternary: '#fe4f70',
        quinary: '#8F9BAD',
        senary: '#ffffff99',
        septenary: '#F1F8FF',
      },
      backgroundImage: {
        'senary-gradient': 'linear-gradient(to right, #fe4f70, #ffa387)',
        'senary-gradient-hover': 'linear-gradient(to left, #fe4f70, #ffa387)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
