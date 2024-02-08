import type { NuxtLink } from '#build/components'; import type { NuxtLink } from
'#build/components'; import { motion } from "framer-motion"
<template>
  <div>
    <NuxtLink
      to="/explication"
      class="flex flex-col items-center justify-center gap-6 h-screen w-screen"
    >
      <img
        src="/assets/media/logoSpaceQuizzFinal.svg"
        alt="logo space quizz"
        class="md:w-cardQuestion lg:1/2"
      />

      <span
        class="absolute top-3/4 py-3 px-3 rounded-xl w-56 text-center uppercase font-normal text-lg animate-bounce text-white hover:underline"
        >Press start</span
      >
    </NuxtLink>
  </div>
</template>
