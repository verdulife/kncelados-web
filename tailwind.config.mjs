const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      fontFamily: {
        title: [
          "Everett",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Apple Color Emoji",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        knred: "#e13300",
        knblue: "#0b2033",
      },
    },
  },
  plugins: [],
};
