<template>
  <main>
    <Header />
    <div>
      <div class="night">
        <div v-for="index in 20" :key="index" class="shooting_star"></div>
      </div>
    </div>

    <section
      class="min-h-screen md:container md:m-auto px-2 flex justify-center items-center"
      v-motion-fade
    >
      <div class="w-full flex justify-center items-center z-20">
        <ExplicationCard></ExplicationCard>
      </div>
    </section>
  </main>
</template>

<script>
export default {
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
