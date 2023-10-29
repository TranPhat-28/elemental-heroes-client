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
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'translate(1px, 1px)' },
                    '20%': { transform: 'translate(-3px, 0px)' },
                    '40%': { transform: 'translate(1px, -1px)' },
                    '60%': { transform: 'translate(-3px, 1px)' },
                    '80%': { transform: 'translate(-1px, -1px)' },
                    '100%': { transform: 'translate(1px, -2px)' },
                }
            },
            animation: {
                shake: 'shake 0.5s infinite',
            },
            fontFamily: {
                'bungee-spice': ['"Bungee Spice"', 'sans-serif'],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["corporate", "business"],
    },
}