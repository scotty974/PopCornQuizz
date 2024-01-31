import type { NuxtLink } from '#build/components'; import type { NuxtLink } from
'#build/components';
<template>
  <div class="flex flex-col items-center gap-6">


    <h1 class="text-4xl font-bold text-white">SpaceQuizz</h1>

    <p class="text-center text-textColor w-96">
      Embarquez pour un voyage intergalactique : votre premier quiz spatial vous
      attend dans les étoiles!
    </p>
    <NuxtLink
      to="/login"
      class="bg-primary py-3 px-3 rounded-xl w-56 text-center font-bold text-2xl text-white"
      >Embarquer</NuxtLink

    >
  </div>
</template>
