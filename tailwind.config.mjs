import defaultTheme from "tailwindcss/defaultTheme";
import animations from '@midudev/tailwind-animations';
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
        knred: "#e5311f",
        knblue: "#102133",
      },
    },
  },
  plugins: [animations, textstroke],
};
