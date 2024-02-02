

<template>
  <section
    class="md:container md:m-auto px-2 min-h-screen flex justify-center items-center"
  >
  <div class="absolute">
    <CanvaCanvas />
  </div>
 
    <div class="w-full flex justify-center items-center h-screen z-20">
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
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>
