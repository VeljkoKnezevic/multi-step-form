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
        "sky-blue": "#BEE2FD",
        denim: "#022959",
        bg: "#EFF5FF",
        grey: "#9699AA",
        "light-grey": "#D6D9E6",
        purple: "#483EFF",
      },
      fontFamily: {
        ubuntu: ["ubuntu", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 25px 40px -20px rgba(0, 0, 0, 0.0951141)",
      },
    },
  },
  plugins: [],
};
