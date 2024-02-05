<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col w-cardLeaderboard h-full bg-primary rounded-leaderboard px-8 py-5"
    >
      <div class="flex flex-col items-center">
        <h2 class="text-white text-2xl">LeaderBoard</h2>
      </div>

      <div class="flex flex-col gap-3 py-3">
        <div
          v-for="(user, index) in users"
          :key="index"
          class="flex justify-between"
        >
          <div
            class="bg-textSecondary bg-opacity-50 rounded-answer flex justify-between w-full p-3"
            :class="{
              'top-10-background': position === index + 1,
              'top-10-backgroundBis': position !== index + 1 && index % 2 === 0,
            }"
          >
            <p
              :class="{ 'top-10-text': position === index + 1 }"
              class="text-white font-medium"
            >
              {{ index + 1 }}. {{ user.username }}
            </p>
            <span
              :class="{ 'top-10-text': position === index + 1 }"
              class="text-white"
              >{{ user.score }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTopTen: false,
      showGreenDiv: false,
      showRedDiv: false,
    };
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
    position: {
      type: Number,
    },
  },
  methods: {
    handleCorrectAnswerClicked() {
      if (this.isCorrect) {
        this.showGreenDiv = true;
      } else {
        this.showRedDiv = true;
      }
    },
  },
};
</script>

<style scoped>
.top-10-background {
  background-color: white;
}
.top-10-backgroundBis {
  background-color: rgba(144, 163, 191, 0.3);
}
.top-10-text {
  color: #0466c8 !important;
}
</style>
