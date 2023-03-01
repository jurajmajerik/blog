/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      height: {
        transparent: 'transparent',
        10: '10px',
        125: '125px',
        135: '135px',
        140: '140px',
        150: '150px',
        160: '160px',
      },
      colors: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
};
