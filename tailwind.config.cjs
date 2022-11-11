/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        light: [
          '0 1px 8px rgba(255, 255, 255, 0.24)',
          '0 0 1px rgba(255, 255, 255, 0.8)',
        ],
      },
    },
  },
  plugins: [],
};
