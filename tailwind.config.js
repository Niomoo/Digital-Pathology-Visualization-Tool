/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('src/assets/background.svg')",
      },
      colors: {
        'primary': "#F6F8FD",
      },
      gridTemplateRows: {
        '12': "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
      }
    },
  },
  plugins: [],
}

