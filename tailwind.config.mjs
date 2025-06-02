/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '1366px'
      },
      colors: {
        transparent: 'transparent',
        sidebar: '#FFF'
      }
    }
  },
  plugins: []
}
