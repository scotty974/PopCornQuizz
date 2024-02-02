<script setup>
import questionsScore from "../questionCard/questionsScore.js";
</script>
<template>
  <div class="flex flex-col gap-7 items-center">
    <div class="w-cardQuestion md:h-56 bg-slate-400 rounded-3xl"></div>
    <span class="question text-2xl text-white">{{ data.question }}</span>
    <div class="flex flex-col gap-10">
      <div class="flex gap-6">
        <AnswerCard
          :answer="data.true_answer"
          :isCorrect="correctAnswer"
          @card-clicked="handleCardClicked"
          :good-answer="true"
        ></AnswerCard>

        <AnswerCard
          :answer="data.false_answer_one"
          :isCorrect="correctAnswer"
          @card-clicked="handleCardClicked"
          :good-answer="false"
        ></AnswerCard>
      </div>
      <div class="flex gap-6">
        <AnswerCard
          :answer="data.false_answer_two"
          :isCorrect="correctAnswer"
          @card-clicked="handleCardClicked"
          :good-answer="false"
        ></AnswerCard>
        <AnswerCard
          :answer="data.false_answer_three"
          :isCorrect="correctAnswer"
          @card-clicked="handleCardClicked"
          :good-answer="false"
        ></AnswerCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correctAnswer: null,
      shuffleAnswer : []
    };
  },
  props: {
    data: {
      type: Object,
      immediate : true
    },
  },
  mounted(){
    this.shuffleAnswerIndex()
  },
  methods: {
    shuffleAnswerIndex(){
      this.shuffleAnswer = [{text : this.data.true_answer},{text : this.data.false_answer_one},{text : this.data.false_answer_two},{text : this.data.false_answer_three}]
      
    }, 
    handleCardClicked(cardInfo) {
      if (
        cardInfo.answer.toLowerCase() === this.data.true_answer.toLowerCase()
      ) {
        this.correctAnswer = true;
        cardInfo.isCorrect = this.correctAnswer;
        questionsScore(this.data.score);
      } else {
        this.correctAnswer = false;
        cardInfo.isCorrect = this.correctAnswer;
        questionsScore(0);
      }

      this.$emit("selected-Card");
    },
  },
};
</script>
