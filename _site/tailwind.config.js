module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        bottom: '0 5px 1px -1px rgba(0, 0, 0, 0.075), 0 2px 10px -1px rgba(0, 0, 0, 0.075)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}