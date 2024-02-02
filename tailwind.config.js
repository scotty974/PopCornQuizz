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
        primary: "#0466C8",
        blueSecondary: "#30376A",
        textSecondary: "#90A3BF",
        bgLevel: "#3E4578",
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
    },
  },
  plugins: [],
};
