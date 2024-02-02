<template>
  <div
    class="flex items-center justify-center w-56 h-20 bg-bgLevel bg-opacity-30 hover:bg-primary transition ease-in-out duration-300 rounded-answer hover:cursor-pointer px-4"
    @click="toggleSelection"
    :class="{
      'correct-answer': isCorrect && isSelected,
      'wrong-answer': !isCorrect && isSelected,
      'show-good-answer': showGoodAnswer,
    }"
  >
    <span class="text-base text-white text-center">{{ answer }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
      showGoodAnswer: false,
    };
  },
  props: {
    answer: {
      type: Object,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      default: null,
    },
    goodAnswer: {
      type: Boolean,
    },
  },
  methods: {
    toggleSelection() {
      this.isSelected = true;

      this.$emit("card-clicked", {
        answer: this.answer,
        isCorrect: this.isCorrect,
        goodAnswer: this.goodAnswer,
      });
      if (!this.isCorrect && this.goodAnswer) {
        this.showGoodAnswer = true;
      }
    },

    resetStyle() {
      this.isSelected = false;
      this.showGoodAnswer = false;
    },
  },
  watch: {
    answer() {
      this.resetStyle();
    },
  },
};
</script>

<style scoped>
.correct-answer {
  background-color: #2b9b63;
}
.wrong-answer {
  background-color: #e63a46 !important;
  cursor: not-allowed;
}
.show-good-answer {
  background-color: #2b9b63;
}
</style>
