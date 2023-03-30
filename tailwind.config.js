/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('src/assets/background.svg')",
      }
    },
  },
  plugins: [],
}

