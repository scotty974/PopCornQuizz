<template>
  <div class="flex flex-col gap-6">
    <div
      class="flex flex-col w-cardLeaderboard h-full bg-primary rounded-leaderboard gap-8 px-8 pt-8 pb-6"
    >
      <div class="flex flex-col items-center gap-3">
        <img class="w-14" src="assets/media/expert.svg" alt="" />
        <h2 class="text-white text-2xl">LeaderBoard</h2>
      </div>

      <div class="flex flex-col gap-3">
        <div
          v-for="(user, index) in users"
          :key="index"
          class="flex justify-between"
        >
          <span class="text-white font-medium"
            >{{ index + 1 }}. {{ user.username }}</span
          >
          <span class="text-white">{{ user.score }}</span>
        </div>
      </div>
    </div>

    <NuxtLink to="/level">
      <button class="bg-white text-primary rounded-answer py-3 w-full">
        Recommencer
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
