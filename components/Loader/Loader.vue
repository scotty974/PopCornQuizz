<template>
    <div>
    <div class="night-loader">
      <div v-for="index in 20" :key="index" class="shooting_star"></div>
    </div>
  </div>
    
   
   
</template>

<script>
export default {
  mounted() {
    // JavaScript pour générer les étoiles
    const nightContainer = document.querySelector(".night-loader");

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