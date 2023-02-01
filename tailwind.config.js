/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C0F62E",
        secondary: "#19121C",
        tertiary: "#D9D9D9",
        background: "#19121C",
      },
      fontFamily: {
        primary: ["Open Sans", "sans-serif"],
      },
    },
    plugins: [],
  },
};
