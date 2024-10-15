/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(min(100%, 15rem), 1fr))',
      },
    },
  },
  plugins: [],
}
