import type { NuxtLink } from '#build/components'; import type { NuxtLink } from
'#build/components';
<template>
  <div class="flex flex-col items-center gap-6">
    <img src="/main-logo.png" alt="logo space quizz" class="w-1/4">

    
    <NuxtLink
      to="/explication"
      class="absolute top-3/4 py-3 px-3 rounded-xl w-56 text-center uppercase font-normal text-lg animate-bounce  text-white hover:underline"
      >Press to start</NuxtLink
    >
  </div>
</template>
