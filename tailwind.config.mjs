import defaultTheme from "tailwindcss/defaultTheme";
import textstroke from "@designbycode/tailwindcss-text-stroke";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Clash Display Variable",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      colors: {
        "knc-red": "#e5311f",
        "knc-blue": "#102133",
        "knc-dark": "#060d14",
      },
    },
  },
  plugins: [textstroke],
};
