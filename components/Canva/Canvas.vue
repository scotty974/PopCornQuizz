<script lang="ts" setup>
const texure = await useTexture(['/2k_mars.jpg'])
</script>

<template>
  <TresCanvas  window-size>
   <OrbitControls />
    <TresPerspectiveCamera />
    <TresMesh :position-x="2">
      <TresSphereGeometry  />
      <TresMeshBasicMaterial :map="texture"/>
    </TresMesh>
    <TresGridHelper />
  </TresCanvas>
</template>
