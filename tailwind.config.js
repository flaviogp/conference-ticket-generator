/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {

        "neutral-0": "hsl(0, 0%, 100%)",
        "neutral-300": "hsl(252, 6%, 83%)",
        "neutral-500": "hsl(245, 15%, 58%)",
        "neutral-700": "hsl(245, 19%, 35%)",
        "neutral-900": "hsl(248, 70%, 10%)",
        "Orange-500": "hsl(7, 88%, 67%)",
        "Orange-700": "hsl(7, 71%, 60%)",
        "Gradient-text": "hsl(7, 86%, 67%) to hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}