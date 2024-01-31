import type AnswerCardVue from '../answers/AnswerCard.vue'; import type { space
} from 'postcss/lib/list';
<template>
  <div class="flex flex-col gap-7 items-center">
    <div class="w-cardQuestion h-72 bg-slate-400 rounded-3xl"></div>
    <span class="text-2xl text-white">La question de l'image</span>
    <div class="flex flex-col gap-10">
      <div class="flex gap-6">
        <AnswerCardVue></AnswerCardVue>
      </div>
      <div class="flex gap-6"></div>
    </div>
  </div>
</template>
