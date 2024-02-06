<script setup>
import levelsData from "../level/level.json";
</script>
<template>
  <div>
    <div class="night">
      <div v-for="index in 20" :key="index" class="shooting_star"></div>
    </div>
  </div>
  <Header />
  <section
    class="flex flex-col md:container md:m-auto px-2 justify-center items-center gap-6 h-screen"
  >
    <h2 v-motion-slide-top class="text-3xl font-bold text-white">
      Choisir votre niveau
    </h2>
    <div class="w-full flex justify-center items-center z-20 gap-6">
      <LevelCard
        v-for="level in levels"
        :level="level.level"
        :image="level.image"
        :id="level.id"
      />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      levels: levelsData,
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    // JavaScript pour générer les étoiles
    const nightContainer = document.querySelector(".night");

    for (let i = 0; i < 70; i++) {
      const shootingStar = document.createElement("div");
      shootingStar.classList.add("shooting_star");

      // Génération de positions aléatoires
      const topPosition = Math.floor(Math.random() * 100) + 1;
      const leftPosition = Math.floor(Math.random() * 100) + 1;

      // Application des positions aléatoires
      shootingStar.style.top = `${topPosition}%`;
      shootingStar.style.left = `${leftPosition}%`;

      nightContainer.appendChild(shootingStar);
    }
  },
};
</script>
