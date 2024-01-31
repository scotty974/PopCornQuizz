<script setup>
const img = useImage();
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <div class="flex flex-col items-center gap-2">
      <NuxtLink
        to="/question"
        class="flex w-52 h-52 bg-bgLevel bg-opacity-30 hover:bg-primary transition ease-in-out duration-300 rounded-2xl items-center justify-center"
        @click="toggleSelection"
        :class="{ 'selected-card': isSelected }"
      >
        <img
          :src="`_nuxt/assets/media/${image}`"
          :alt="level"
          class="w-40 h-40"
        />
      </NuxtLink>
      <h3
        @click="toggleSelection"
        :class="{ 'selected-text': isSelected }"
        class="text-xl font-bold text-textSecondary"
      >
        {{ level }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
    };
  },
  props: {
    level: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  methods: {
    toggleSelection() {
      this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style scoped>
.selected-card {
  background-color: #0466c8;
}
.selected-text {
  color: white;
}
</style>
