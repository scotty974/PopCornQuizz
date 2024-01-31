<template>
  <div class="flex flex-col gap-7 items-center">
    <div class="w-cardQuestion md:h-56 bg-slate-400 rounded-3xl"></div>
    <span class="question text-2xl text-white">{{ data.question }}</span>
    <div class="flex flex-col gap-10">
      <div class="flex gap-6">
        <AnswerCard
          :answer="data.true_answer"
          :is-correct="correctAnswer = true"
          @card-clicked="handleCardClicked"
        ></AnswerCard>

        <AnswerCard
          :answer="data.false_answer_one"
          :is-correct="correctAnswer =false"
          @card-clicked="handleCardClicked"
        ></AnswerCard>
      </div>
      <div class="flex gap-6">
        <AnswerCard
          :answer="data.false_answer_two"
          :is-correct="correctAnswer =false"
          @card-clicked="handleCardClicked"
        ></AnswerCard>
        <AnswerCard
          :answer="data.false_anwser_three"
          :is-correct="correctAnswer = false"
          @card-clicked="handleCardClicked"
        ></AnswerCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correctAnswer: false,
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    handleCardClicked(cardInfo) {
      console.log('Card Clicked:', cardInfo);
      this.correctAnswer = cardInfo.isCorrect;
      console.log(this.correctAnswer)
    },
  },
};
</script>
