import type AnswerCardVue from '../answers/AnswerCard.vue'; import type { space
} from 'postcss/lib/list';
<template>
  <div class="flex flex-col gap-7 items-center">
    <div class="w-cardQuestion h-72 bg-slate-400 rounded-3xl"></div>
    <span class="text-2xl text-white">{{ question }}</span>
    <div class="flex flex-col gap-10">
      <div class="flex gap-6">
        <AnswerCard answer="Réponse 1"></AnswerCard>
        <AnswerCard answer="Réponse 2"></AnswerCard>
      </div>
      <div class="flex gap-6">
        <AnswerCard answer="Réponse 3"></AnswerCard>
        <AnswerCard answer="Réponse 4"></AnswerCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
    },
  },
};
</script>
