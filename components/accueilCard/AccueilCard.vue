import type { NuxtLink } from '#build/components'; import type { NuxtLink } from
'#build/components'; import { motion } from "framer-motion"
<template>
  <div v-motion-fade>
    <NuxtLink
      to="/explication"
      class="flex flex-col items-center justify-center gap-6 h-screen"
    >
      <img src="/main-logo.png" alt="logo space quizz" class="w-1/4" />

      <span
        class="absolute top-3/4 py-3 px-3 rounded-xl w-56 text-center uppercase font-normal text-lg animate-bounce text-white hover:underline"
        >Press start</span
      >
    </NuxtLink>
  </div>
</template>
