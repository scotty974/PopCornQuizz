import type { Suspense } from 'vue';

<template>
  <TresCanvas window-size>
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight
      cast-shadow
      :position="[-10, 10, 5]"
      :intensity="5"
      color="#ffede6"
    />
    <TresPerspectiveCamera :args="[35, 0, 0.5, 5000]" :position="[0, 0, 8]" />
    <Suspense>
      <Lune />
    </Suspense>
    <Suspense><Asteroids /></Suspense>
  </TresCanvas>
</template>
