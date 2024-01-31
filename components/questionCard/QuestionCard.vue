<template>
  <div class="flex flex-col gap-7 items-center">
    <div class="w-cardQuestion h-56 md:h-72 bg-slate-400 rounded-3xl"></div>
    <span class="text-2xl text-white">{{ question }}</span>
    <div class="flex flex-col gap-10">
      <div class="flex gap-6">
        <AnswerCard
          v-if="answerExists"
          :answer="answer[0].true_answer"
          :is-correct="correctAnswer === answer[0].true_answer"
        ></AnswerCard>
        <AnswerCard
          v-if="answerExists"
          :answer="answer[0].false_answer_one"
          :is-correct="correctAnswer === answer[0].false_answer_one"
        ></AnswerCard>
      </div>
      <div class="flex gap-6">
        <AnswerCard
          v-if="answerExists"
          :answer="answer[0].false_answer_two"
          :is-correct="correctAnswer === answer[0].false_answer_two"
        ></AnswerCard>
        <AnswerCard
          v-if="answerExists"
          :answer="answer[0].false_anwser_three"
          :is-correct="correctAnswer === answer[0].false_anwser_three"
        ></AnswerCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: [],
      correctAnswer: null,
    };
  },
  props: {
    question: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
  computed: {
    answerExists() {
      return this.answer.length > 0 && !!this.answer[0];
    },
  },
  mounted() {
    this.handleAnswer();
  },
  methods: {
    async handleAnswer() {
      this.answer = this.data;
      this.correctAnswer = this.answer[0].true_answer;
    },
  },
};
</script>
