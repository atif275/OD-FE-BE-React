/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  "./src/*.js",],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#202020', // Equivalent to rgb(32,32,32)
      },
    },
  },
  plugins: [],
}

