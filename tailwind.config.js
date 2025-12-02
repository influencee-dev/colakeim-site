/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#F43F5E',
          dark: '#1A1A1A',
          gray: '#2A2A2A',
          gold: '#C5A059'
        }
      }
    },
  },
  plugins: [],
}