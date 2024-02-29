/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*index.html"],
  theme: {
    extend: {fontFamily: {
      'dmserif': ['DM Serif', 'serif'],
      'com': ['Comfortaa', 'cursive'],
    }},
  },
  plugins: [],
}

