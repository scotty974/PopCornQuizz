<template>
  <Loader v-if="isLoading" />
  <section
    class="md:container md:m-auto px-2 min-h-screen flex justify-center items-center"
  >
    <div class="absolute">
      <CanvaCanvas @end-loader="handleLoading" />
    </div>

    <div class="w-full flex justify-center items-center h-screen z-10">
      <AccueilCard />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },

  methods: {
    handleLoading() {
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
  },
};
</script>
