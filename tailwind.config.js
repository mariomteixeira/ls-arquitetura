/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
        coralBlush: ['"Coral Blush Serif"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "green-moss": "#4A734B",
        "blue-steel": "#343B54",
      },
    },
  },
  plugins: [],
};
