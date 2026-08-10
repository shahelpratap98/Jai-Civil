/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        soil: {
          800: '#2B1E11',
          900: '#20160C',
          950: '#171008',
        },
        sand: {
          50: '#F6F0E4',
          100: '#EDE4D3',
          200: '#DBCBB2',
          300: '#C4B096',
          400: '#A28E71',
          500: '#83705A',
        },
        clay: {
          400: '#D28E52',
          500: '#BE7940',
          600: '#9C5F2E',
        },
      },
    },
  },
  plugins: [],
};
