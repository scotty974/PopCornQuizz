/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors : {
        textColor : "#747DB5",
        bgColor  : "#2A3164",
        primary : "#0466C8"
      }
    },
  },
  plugins: [],
}