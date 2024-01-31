<script setup>
import levelsData from "../level/level.json";
</script>
<template>
  <Header />
  <section
    class="flex flex-col md:container md:m-auto px-2 justify-center items-center gap-6 h-screen"
  >
    <h2 class="text-3xl font-bold text-white">Choisir votre niveau</h2>
    <div class="w-full flex justify-center items-center z-20 gap-6">
      <LevelCard
        v-for="level in levels"
        :level="level.level"
        :image="level.image"
        :id="level.id"
      />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      levels: levelsData,
    };
  },
};
</script>
