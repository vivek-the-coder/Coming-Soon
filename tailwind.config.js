/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#0a1324',
          dark: '#13253f',
          DEFAULT: '#1c3454',
          light: '#f5efe5',
          accent: '#c5a572',
          muted: '#e9dfd0',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        glow: '0 25px 65px rgba(10, 19, 36, 0.25)',
      },
    },
  },
  plugins: [],
};
