<template>
  <div
    class="flex items-center justify-center w-56 h-20 bg-bgLevel bg-opacity-30 hover:bg-primary transition ease-in-out duration-300 rounded-answer"
    @click="toggleSelection"
    :class="{ 'selected-card': isSelected }"
  >
    <span class="text-xl text-white">{{ answer }}</span>
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
    answer: {
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
</style>
