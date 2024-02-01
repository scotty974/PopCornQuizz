<template>
  <div class="flex flex-col gap-7 items-center">
    <div class="w-cardQuestion md:h-56 bg-slate-400 rounded-3xl"></div>
    <span class="question text-2xl text-white">{{ data.question }}</span>
    <div class="flex flex-col gap-10">
      <div class="flex gap-6">
        <AnswerCard
          :answer="data.true_answer"
          :is-correct="correctAnswer"
          @card-clicked="handleCardClicked"
        ></AnswerCard>

        <AnswerCard
          :answer="data.false_answer_one"
          :is-correct="correctAnswer"
          @card-clicked="handleCardClicked"
        ></AnswerCard>
      </div>
      <div class="flex gap-6">
        <AnswerCard
          :answer="data.false_answer_two"
          :is-correct="correctAnswer"
          @card-clicked="handleCardClicked"
        ></AnswerCard>
        <AnswerCard
          :answer="data.false_anwser_three"
          :is-correct="correctAnswer"
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
      correctAnswer: null,
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    handleCardClicked(cardInfo) {
      if (
        cardInfo.answer.toLowerCase() === this.data.true_answer.toLowerCase()
      ) {
        this.correctAnswer = true;
      } else {
        this.correctAnswer = false;
      }

      this.$emit("selected-Card");
    },
  },
};
</script>
