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
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        solar: {
          400: '#FBBF24', // Amber 400
          500: '#F59E0B', // Amber 500
          glow: 'rgba(245, 158, 11, 0.5)',
        },
        neutral: {
          950: '#0a0a0a',
          925: '#121212', // Custom subtle off-black
        }
      },
      backgroundImage: {
        'luxury-gradient': 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      }
    },
  },
  plugins: [],
}