<script setup>
import defineGuardPseudo from "../pseudoCard/pseudoGuard.ts";
</script>
<template>
  <div class="flex flex-col items-center gap-6">
    <h2 v-motion-slide-top class="text-3xl font-bold text-white">
      Choisir votre pseudo
    </h2>
    <form
      class="flex flex-col items-center gap-6"
      @submit.prevent="setLocalPseudo"
    >
      <input
        v-motion-slide-top
        class="bg-blueSecondary px-8 rounded-lg w-72 h-10 text-white"
        type="text"
        placeholder="spaceJoe"
        v-model="pseudo"
        @change="handleInputChange"
      />

      <button
        v-motion-slide-bottom
        :delay="100"
        :class="{
          'bg-primary': pseudo !== null,
          'bg-textColor': pseudo === null,
        }"
        :disabled="pseudo === null"
        type="submit"
        class="bg-primary py-3 px-3 rounded-xl min-w-72 text-center font-bold text-2xl text-white"
      >
        Continuer
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pseudo: null,
      score: 0,
    };
  },
  methods: {
    async setLocalPseudo() {
      this.pseudo = this.pseudo || null;

      try {
        const result = await defineGuardPseudo(this.pseudo, this.score);
        if (result === false) {
        } else {
          result;
        }
      } catch (error) {
        console.error(error);
      }
    },
    handleInputChange() {
      if (this.pseudo === null) {
        // Si l'input est vidé, réinitialiser la couleur grise et désactiver le bouton
        this.$refs.submitButton.classList.remove("bg-primary");
        this.$refs.submitButton.classList.add("bg-textColor");
        this.$refs.submitButton.setAttribute("disabled", "true");
      }
    },
  },
};
</script>
