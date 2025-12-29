/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1e692a',
          gold: '#FFD700',
          cream: '#F6F1D3',
        }
      },
      screens: {
        'xs': '475px', // Add smaller breakpoint if needed
      }
    },
  },
  plugins: [],
}