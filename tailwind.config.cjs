/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    screens: {
      'sm': '640px',
      'lg': '880px',
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        light: [
          '0 1px 8px rgba(255, 255, 255, 0.32)',
          '0 0 1px rgba(255, 255, 255, 0.8)',
        ],
        text: ['0 0 1px rgba(0, 0, 0, 1)'],
      },
    },
  },
  plugins: [],
};
