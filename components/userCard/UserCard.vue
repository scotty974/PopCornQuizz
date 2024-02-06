<template>
  <div v-motion-fade class="flex flex-col items-center gap-6">
    <h2 class="text-white text-4xl">{{ pseudo }}</h2>
    <div class="flex flex-col gap-4">
      <div
        v-motion-pop-visible-once
        class="bg-textSecondary gap-2 bg-opacity-60 w-cardClassement h-full flex items-center justify-center flex-col rounded-3xl p-4"
      >
        <div class="flex flex-col items-center">
          <p class="text-white text-xl">Ton score :</p>
          <span class="text-6xl text-white">{{ score }}</span>
        </div>
      </div>
      <div
        v-motion-pop-visible-once
        :delay="150"
        class="bg-textSecondary gap-2 bg-opacity-60 w-cardClassement h-full flex items-center justify-center flex-col rounded-3xl p-4"
      >
        <p class="text-white text-xl">Ton classement :</p>
        <p class="text-white text-bold"></p>
        <div
          class="flex h-full w-full justify-center bg-primary rounded-answer px-5 py-3"
        >
          <p class="text-white text-2xl">
            {{ userPosition }} <span v-if="userPosition === 1">er</span>
            <span v-else="userPosition > 1">ème</span>
          </p>
        </div>
      </div>
      <NuxtLink to="/level">
        <button
          v-motion-slide-bottom
          :delay="200"
          class="bg-white text-primary rounded-answer py-3 w-full h-28 text-2xl"
        >
          Recommencer
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pseudo: String,
    score: Number,
    userPosition: String,
  },
};
</script>
