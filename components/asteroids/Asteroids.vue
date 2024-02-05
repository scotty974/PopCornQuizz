
<script setup lang="ts">
import { ref } from "vue";
import { useRenderLoop } from "@tresjs/core";
const texture = await useTexture({
  map: "rock_boulder_dry_ao_4k.jpg",
  disp: "rock_boulder_dry_disp_4k.jpg",
  roughness: "rock_boulder_dry_rough_4k.jpg",
  normalMap: "rock_boulder_dry_nor_gl_4k.jpg",
  diff: "rock_boulder_dry_diff_4k.jpg",
});
const asteroid = ref<TresInstance | null>(null);

const radius = 3.5; // ajustez le rayon selon vos besoins
const speed = -0.5; // ajustez la vitesse de rotation selon vos besoins

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
    asteroid.value.rotation.y = elapsed * -0.8;
  }
});
</script>

<template>

  <TresMesh ref="asteroid" receive-shadow>
    <TresSphereGeometry :args="[0.3, 100, 100]" />
    <TresMeshStandardMaterial
      :aoMap="texture.map"
      :displacementMap="texture.disp"
      :roughnessMap="texture.roughness"
      :normalMap="texture.normalMap"
      :emissiveMap="texture.diff"
      color="#8c8fbd"
      :roughness="1"
    />
  </TresMesh>
</template>
