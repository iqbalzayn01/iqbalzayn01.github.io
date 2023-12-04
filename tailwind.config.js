/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // Font family
    fontFamily: {
      basefont: ["'Poppins'", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0AB88A",
        secondary: "#2C3333",
      },
    },
  },
  plugins: [],
};
