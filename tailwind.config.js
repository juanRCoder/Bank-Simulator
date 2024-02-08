/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        salsa :['Noto Serif',
         'PT Serif', 
        'Salsa', 'cursive']
      },
    },
  },
  plugins: [],
};
