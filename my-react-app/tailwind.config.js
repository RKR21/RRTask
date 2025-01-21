/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite's entry HTML file
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95" },
          "100%": { opacity: "100", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
