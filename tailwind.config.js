/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#093d91',
      },
      fontFamily: {
        rubikMaze: ["Rubik Maze", "cursive"],
        rubikDirt: ["Rubik Dirt", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}

