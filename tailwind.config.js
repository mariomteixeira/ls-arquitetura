/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{html,js,jsx,ts,tsx,css}"];
export const theme = {
  extend: {
    fontFamily: {
      "bebas-neue": ["Bebas Neue", "sans-serif"],
      coralBlush: ['"Coral Blush Serif"', ..._fontFamily.serif],
    },
    colors: {
      "green-moss": "#4A734B",
      "blue-steel": "#343C54",
      "laranja-claro": "#c48b6a",
      "branco-gelo": "#f7f4ef",
    },
  },
};
export const plugins = [];
