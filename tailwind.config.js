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
            water: "#0004f0",
            electric: "#9b00f5",
            wind: "#0cc20e",
            earth: "#cf6b00"
        }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate", "business"],
  },
}