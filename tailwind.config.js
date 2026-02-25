/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        beige: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#E8E2D9',
          300: '#D4CFC4',
        },
        charcoal: '#1A1918',
        muted: '#6B6966',
        accent: '#D4A574',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
