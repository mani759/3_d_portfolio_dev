/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#FFD43B',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FFD43B',
          500: '#FFD43B',
          600: '#e5be35',
          700: '#b29124',
          800: '#866c1b',
          900: '#785e1b',
          950: '#45330a',
        },
        blue: {
          DEFAULT: '#FFD43B',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FFD43B',
          500: '#FFD43B',
          600: '#e5be35',
          700: '#b29124',
          800: '#866c1b',
          900: '#785e1b',
          950: '#45330a',
        },
      },
    },
  },
  plugins: [],
}
