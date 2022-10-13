/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontFamily: {
        'first': ['Roboto'],
        'secondary': ['Raleway'],
        'third' : ['Roboto-Slab']
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ],
}
