import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            fire: "#ff3b0f",
            water: "#0003a6",
            electric: "#6600a1",
            wind: "#0f9411",
            earth: "#703a00"
        }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate", "business"],
  },
}