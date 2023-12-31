/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: {
        50: "#feffff",
        100: "#fefeff",
        200: "#fdfefe",
        300: "#f7fbfc",
        400: "#dee2e3",
        500: "#c6c9ca",
        600: "#b9bcbd",
        700: "#949797",
        800: "#6f7171",
        900: "#565858",
      },
      blue: {
        50: "#ecf1fe",
        100: "#e2eafd",
        200: "#c4d3fc",
        300: "#4070f4",
        400: "#3a65dc",
        500: "#335ac3",
        600: "#3054b7",
        700: "#264392",
        800: "#1d326e",
        900: "#162755",
      },
      red: {
        50: "#fcefef",
        100: "#fbe7e7",
        200: "#f7cecd",
        300: "#e5625e",
        400: "#ce5855",
        500: "#b74e4b",
        600: "#ac4a47",
        700: "#893b38",
        800: "#672c2a",
        900: "#502221",
      },
      gray: {
        50: "#eaeaea",
        100: "#dfdfe0",
        200: "#bebebf",
        300: "#2c2c31",
        400: "#28282c",
        500: "#232327",
        600: "#212125",
        700: "#1a1a1d",
        800: "#141416",
        900: "#0f0f11",
      },
    },
    screens: {
      tab: { max: "640px" },
    },
  },
  plugins: [],
};
