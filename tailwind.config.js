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
        /**
         * Safety orange, the colour already all over the business: the
         * excavator, the machine on the trailer, every cone on site. 400 is
         * the text/icon stop (7.3:1 on soil-950); 500 is the button fill,
         * which carries near-black text at 8:1.
         */
        clay: {
          200: '#FFD2A8',
          300: '#FFAE68',
          400: '#FF8A2B',
          500: '#F26A0F',
          600: '#C4520A',
        },
      },
    },
  },
  plugins: [],
};
