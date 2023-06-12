/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "color-1": "#FDA214",
        "color-2": "#BCCED9",
        "color-3": "#304859",
        "color-4": "#152938",
        "color-5": "#F2F2F2",
        "color-6": "#7191A5",
        "color-7": "#6395B8",
        "color-8": "#FCFCFC",
      },
      fontFamily: {
        primary: ["Atkinson Hyperlegible", "sans-serif"],
      },
    },
  },
  plugins: [],
};
