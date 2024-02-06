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
      colors: {
        textColor: "#747DB5",
        bgColor: "#2A3164",
        primary: "#006AF0",
        blueSecondary: "#30376A",
        textSecondary: "#90A3BF",
        bgLevel: "#3E4578",
        beige: "#EDDCD2",
      },
      height: {
        planetsSize: 500,
        leaderboard: "640px",
      },

      width: {
        cardQuestion: "606px",
        cardLeaderboard: "480px",
        cardClassement: "272px",
      },
      borderRadius: {
        answer: "10px",
        leaderboard: "20px",
      },
      animation: {
        "pulse-slow": "pulse 1s linear infinite",
      },
    },
  },
  plugins: [],
};
