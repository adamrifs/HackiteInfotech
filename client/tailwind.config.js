/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nebula: ['Nebula', 'sans-serif'],
        aexir: ['Aexir', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
