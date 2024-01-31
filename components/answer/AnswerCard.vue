<template>
  <div
    class="flex items-center justify-center w-56 h-20 bg-bgLevel bg-opacity-30 hover:bg-primary transition ease-in-out duration-300 rounded-answer hover:cursor-pointer"
    @click="toggleSelection"
    :class="{ 'correct-answer': isCorrect && isSelected, 'wrong-answer' : !isCorrect && isSelected }"
  >
    <span class="text-xl text-white">{{ answer }}</span>
  </div>
</template>

<script>
export default {
  props: {
    answer: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    toggleSelection() {
      this.isSelected = !this.isSelected;
      if (this.isCorrect && this.isSelected) {
        setTimeout(() => {
          console.log("question suivante");
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.correct-answer {
  background-color: #0466c8;
}
.wrong-answer{
  background-color : #E63A46
}
</style>
