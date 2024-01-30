<template>
  <div>
    <div class="night">
      <div v-for="index in 20" :key="index" class="shooting_star"></div>
    </div>
  </div>
  <section
    class="md:container md:m-auto px-2 min-h-screen flex justify-center items-center"
  >
    <img
      src="../assets/media/planet.png"
      alt="planets illustration"
      class="absolute animate-spin h-planetsSize -z-10 right-80"
      style="animation: spin 50s linear infinite"
    />
    <div class="w-full flex justify-center items-center h-screen z-20">
      <AccueilCard />
    </div>
    <footer>
      <img src="../assets/media/terre.png" alt="planete terre" class="z-50" />
    </footer>
  </section>
</template>

<script>
export default {
  mounted() {
    // JavaScript pour générer les étoiles
    const nightContainer = document.querySelector(".night");

    for (let i = 0; i < 20; i++) {
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
