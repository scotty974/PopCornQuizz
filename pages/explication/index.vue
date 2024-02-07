<template>
  <main>
    <!-- <Header /> -->
    <header class="px-6 py-4 w-screen">
      <NuxtLink to="/">
        <img
          class="m-3"
          src="/assets/media/logoSpaceQuizzFinalSmall.svg"
          alt="space quizz logo"
        />
      </NuxtLink>
    </header>
    <div>
      <div class="night">
        <div v-for="index in 20" :key="index" class="shooting_star"></div>
      </div>
    </div>

    <section
      class="md:container md:m-auto px-2 flex justify-center items-center"
    >
      <div class="w-full flex justify-center items-center z-20">
        <ExplicationCard />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted() {
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
