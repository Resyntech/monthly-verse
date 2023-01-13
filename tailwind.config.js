/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"'],
      },
      colors: {
        pastel: {
          dark: "#65647C",
          color1: "#8B7E74",
          color2: "#C7BCA1",
          accent: "#F1D3B3",
        },
      },
    },
  },
  plugins: [],
}
