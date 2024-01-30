<script setup>
import defineGuardPseudo from "../pseudoCard/pseudoGuard.ts";

</script>
<template>
  <div class="flex flex-col items-center gap-6">
    <h2 class="text-3xl font-bold text-white">Choisir votre pseudo</h2>
    <form class="flex flex-col items-center gap-6" @submit="setLocalPseudo">
      <input
        class="bg-blueSecondary px-8 rounded-lg w-72 h-10 text-white"
        type="text"
        placeholder="spaceJoe"
        v-model="pseudo"
      />
      
      <button
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
      
    };
  },
  methods: {
    async setLocalPseudo() {
      
      this.pseudo = this.pseudo || null;

      try {
        const result = await defineGuardPseudo(this.pseudo);
        if (result === false) {
        } else {
          result;
          
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
