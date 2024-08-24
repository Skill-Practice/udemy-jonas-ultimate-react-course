/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // pizza: 'Roboto Mono, monospace',
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      // bg-pizza
      // colors: {
      //   pizza: '#123456',
      // },

      // text-huge
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
