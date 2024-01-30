<template>
  <div class="flex flex-col items-center gap-6">
    <h2 class="text-3xl font-bold text-white">Choisir votre pseudo</h2>
    <form class="flex flex-col items-center gap-6" @submit="setLocalPseudo">
      <input
        class="bg-blueSecondary px-8 rounded-lg w-72 h-10 "
        type="text"
        placeholder="spaceJoe"
        v-model="pseudo"
      />
      <a
        href=""
        class="bg-primary py-3 px-3 rounded-xl min-w-72 text-center font-bold text-2xl text-white"
        >Continuer</a
      >
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      pseudo : ""
    }
  },
  methods : {
    setLocalPseudo(){
      console.log(this.pseudo)
      localStorage.setItem("pseudo" , this.pseudo)
    }
  }
}
</script>