<script setup lang="ts">
import { ref } from 'vue';
import { useRenderLoop } from '@tresjs/core';

const asteroid = ref<TresInstance | null>(null);

const radius = 3.5; // ajustez le rayon selon vos besoins
const speed = 0.5; // ajustez la vitesse de rotation selon vos besoins

const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
  if (asteroid.value) {
    // Calculer les coordonnées polaires en fonction du temps écoulé
    const angle = elapsed * speed;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);

    // Mettre à jour la position de l'astéroïde
    asteroid.value.position.x = x;
    asteroid.value.position.z = z;
  }
});
</script>

<template>
  <TresMesh ref="asteroid">
    <TresSphereGeometry :args="[0.5, 100, 100]" />
    <TresMeshStandardMaterial />
  </TresMesh>
</template>
