<script lang="ts" setup>
import {useTexture} from '@tresjs/core'
const { onLoop } = useRenderLoop();
const sphereRef: ShallowRef<TresInstance | null> = shallowRef(null);
onLoop(({ delta, elapsed }) => {
  if (sphereRef.value) {
    sphereRef.value.rotation.y += delta * 0.2;
    sphereRef.value.rotation.z = elapsed * 0.1;
  }
});

const texture =  useTexture({map :"/2k_mars.jpg"})
</script>

<template>
  <TresCanvas window-size>
    <OrbitControls />
    <TresDirectionalLight
    cast-shadow
    :position="[-10, 10, 5]"
    :intensity="5"
  />
    <TresPerspectiveCamera :args="[70, 10, 0.5, 1000]" />
    <TresMesh ref="sphereRef" receive-shadow>
      <TresSphereGeometry :args="[3, 30, 24]" />
      <TresMeshStandardMaterial :map="texture.map"/>
    </TresMesh>
    <TresGridHelper />
  </TresCanvas>
</template>
