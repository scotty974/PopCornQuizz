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
    };
    //      ^ What we're talking about
  },
  // created() {
  //   this.playSound();
  //   console.log("mounted");
  // },

  methods: {
    handleLoading() {
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    // async playSound() {
    //   const audio = new Audio("intro.mp3");
    //   await audio.play();
    //   console.log("play sound");
    // },
  },
};
</script>
