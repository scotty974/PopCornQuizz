<script setup>
import { Howl } from "howler";
useHead({
  title: "Accueil-SpaceQuizz",
  meta: [
    {
      name: "description",
      content:
        "Explorez les mystères de l'univers avec notre quiz sur l'espace ! Testez vos connaissances astronomiques, découvrez des faits fascinants sur les planètes, les étoiles et les galaxies, et défiez vos amis pour voir qui est le véritable astronome. Plongez dans le cosmos avec des questions captivantes et mesurez votre savoir spatial. Êtes-vous prêt pour ce voyage interstellaire de connaissances ? Répondez aux questions et révélez l'astronaute qui sommeille en vous !",
    },
    {name : "keywords", content:"quiz, espace, astronomie, univers, planètes, étoiles, galaxies, connaissances, astronome, cosmos, questions, jeu, divertissement, éducation"}
  ],
});
useSeoMeta({
  title: "Accueil-SpaceQuizz",
  description:
    "Explorez les mystères de l'univers avec notre quiz sur l'espace ! Testez vos connaissances astronomiques, découvrez des faits fascinants sur les planètes, les étoiles et les galaxies, et défiez vos amis pour voir qui est le véritable astronome. Plongez dans le cosmos avec des questions captivantes et mesurez votre savoir spatial. Êtes-vous prêt pour ce voyage interstellaire de connaissances ? Répondez aux questions et révélez l'astronaute qui sommeille en vous !",

});
</script>

<template>
  <Loader v-if="isLoading" />
  <section class="md:container md:m-auto px-2 flex justify-center items-center">
    <div class="absolute">
      <CanvaCanvas @end-loader="handleLoading" />
    </div>

    <div class="w-full flex justify-center items-center h-screen z-10">
      <AccueilCard />
      <!-- <button class="text-white" @click="playSound">Play Sound</button> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      sound: null,
    };
  },

  methods: {
    handleLoading() {
      this.sound = new Howl({
        src: ["intro.mp3"],
        volume: 1.0,
        autoplay: true,
        loop: true,
        html5: true,
      });
      this.sound.play();
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
  },

  beforeUnmount() {
    // Arrêter le son avant que le composant ne soit démonté
    if (this.sound) {
      this.sound.volume(0.4);
    }
  },
};
</script>
