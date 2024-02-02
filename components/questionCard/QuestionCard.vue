<script setup>
import questionsScore from "../questionCard/questionsScore.js";
import { ref } from "vue";
</script>
<template>
  <div class="flex flex-col gap-7 items-center">
    <div class="w-cardQuestion md:h-56 bg-slate-400 rounded-3xl"></div>
    <span class="question text-2xl text-white">{{ currentQ.question }}</span>
    <div class="flex flex-col gap-10">
      <div class="flex gap-6">
        <AnswerCard
          v-for="(answer, index) in currentAnswers"
          :key="index"
          :answer="answer.text"
          :isCorrect="answer.isCorrect"
          @card-clicked="handleCardClicked"
        ></AnswerCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // useState
    return {
      correctAnswer: null,
      currentAnswers: ref([]),
      currentQ: ref({}),
      currentIndex: 0,
    };
  },
  props: {
    // props
    allQuestions: {
      type: Object,
    },
  },
  mounted() {
    //useEffect []
    this.shuffleQuestions();
    console.log(this.currentQ);
    this.shuffleAnswers();
    console.log(this.currentAnswers);
  },
  methods: {
    // fonctions
    shuffleAnswers() {
      this.currentAnswers = [
        { text: this.currentQ.true_answer, isCorrect: true },
        { text: this.currentQ.false_answer_one, isCorrect: false },
        { text: this.currentQ.false_answer_two, isCorrect: false },
        { text: this.currentQ.false_answer_three, isCorrect: false },
      ];
      this.currentAnswers = this.currentAnswers.sort(() => Math.random() - 0.5);
    },
    shuffleQuestions() {
      const allQuestions = this.allQuestions.sort(() => Math.random() - 0.5);
      this.currentQ = allQuestions[this.currentIndex];
    },
    handleCardClicked(cardInfo) {
      if (cardInfo.isCorrect) {
        questionsScore(this.currentQ.score);
      }
      this.currentIndex++;
      if (this.currentIndex > this.allQuestions.length) {
        this.$emit("game-over");
      } else {
        setTimeout(() => {
          this.currentQ = this.allQuestions[this.currentIndex];
          this.shuffleAnswers();
        }, 500);
      }
      // this.$emit("selected-Card");
    },
  },
};
</script>
