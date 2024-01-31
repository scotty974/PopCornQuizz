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
  data(){
    return{
      isSelected : false
    }
  },
  props: {
    answer: {
      type: Object,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      
    },
  },
  methods: {
    toggleSelection() {
      this.isSelected = true
      this.$emit('card-clicked', { answer: this.answer, isCorrect: this.isCorrect });
    },
  },
};
</script>

<style scoped>
.correct-answer {
  background-color: #0466c8;
}
.wrong-answer {
  background-color: #e63a46;
}
</style>
