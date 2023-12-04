/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // Font family
    fontFamily: {
      basefont: ["'Poppins'", "sans-serif"],
    },
    extend: {
      // Text color
      textColor: {
        primary: "#0AB88A",
        secondary: "#0AAEB8",
        dark: "#2A2A2A",
      },
      // Background color
      backgroundColor: {
        primary: "#0AB88A",
        secondary: "#0AAEB8",
        dark: "#2A2A2A",
        basegradient:
          "linear-gradient(126deg, #0AB88A 0%, #0AB88B 21.50%, #0AAEB6 78.16%, #0AAEB8 100%)",
      },
      // Spacing
      spacing: {
        "50px": "50px",
        "60px": "60px",
        "100px": "100px",
      },
    },
  },
  plugins: [],
};
