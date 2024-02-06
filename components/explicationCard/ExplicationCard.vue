<template>
  <div class="flex flex-col gap-8 items-center">
    <div class="flex flex-col gap-2 items-center">
      <h2 class="text-white text-3xl">Bienvenue dans notre Quiz Spatial !</h2>
      <span class="text-textSecondary text-base mb-2"
        >Testez vos connaissances astronomiques</span
      >
    </div>
    <div class="flex flex-col gap-4">
      <div v-motion-slide-left :delay="100" class="flex gap-4 items-center">
        <img class="w-16" src="assets/media/view.svg" alt="" />
        <p class="text-white text-lg w-96 text-wrap leading-6">
          Choisissez parmi les niveaux débutant, intermédiaire ou expert selon
          votre audace.
        </p>
      </div>
      <div v-motion-slide-left :delay="150" class="flex gap-4 items-center">
        <img class="w-16" src="assets/media/fusee.svg" alt="" />
        <p class="text-white text-lg w-96 text-wrap leading-6">
          Répondez au plus grand nombre de questions possibles en 1 minute.
        </p>
      </div>
      <div v-motion-slide-left :delay="200" class="flex gap-4 items-center">
        <img class="w-16" src="assets/media/sommet.svg" alt="" />
        <p class="text-white text-lg w-96 text-wrap leading-6">
          Atteignez le sommet du leaderboard en obtenant le meilleur score.
        </p>
      </div>
      <NuxtLink to="/login">
        <button
          v-motion-slide-bottom
          :delay="250"
          type="submit"
          class="bg-primary py-3 px-3 mt-10 rounded-xl min-w-72 text-center font-bold text-2xl text-white w-full"
        >
          Décoller
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
