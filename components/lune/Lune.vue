<script setup lang="ts">
const { onLoop } = useRenderLoop();
const sphereRef: ShallowRef<TresInstance | null> = shallowRef(null);

const texture = await useTexture({
  map: "rock_boulder_dry_ao_4k.jpg",
  disp: "rock_boulder_dry_disp_4k.jpg",
  roughness: "rock_boulder_dry_rough_4k.jpg",
  normalMap: "rock_boulder_dry_nor_gl_4k.jpg",
  diff: "rock_boulder_dry_diff_4k.jpg",
});
onLoop(({ delta, elapsed }) => {
  if (sphereRef.value) {
    sphereRef.value.rotation.y = elapsed * 0.03;
  }
});
</script>

<template>
  
  <TresMesh ref="sphereRef" receive-shadow>
    <TresSphereGeometry :args="[3, 100, 100]" />
    <TresMeshStandardMaterial
      :aoMap="texture.map"
      :displacementMap="texture.disp"
      :roughnessMap="texture.roughness"
      :normalMap="texture.normalMap"
      :emissiveMap="texture.diff"
    />
  </TresMesh>
</template>
