/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "main" : "#000000",
        "secondary" : "#FFFFFF",
        "detail" : "#F6EA00",
        "contrast" : "#323232",
        "minor" : "#8C8C8C"
      }
    },
  },
  plugins: [],
}

