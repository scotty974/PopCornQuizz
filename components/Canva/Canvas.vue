import type { Suspense } from 'vue';
<script setup lang="ts">
const yRotation = shallowRef(0);

useRenderLoop().onLoop(({ delta }) => {
  yRotation.value += 0.02 * delta;
});
</script>
<template>
  <TresCanvas window-size>
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight
      cast-shadow
      :position="[-10, 10, 5]"
      :intensity="5"
      color="#ffede6"
    />
    <Stars
      :rotation="[0, yRotation, 0]"
      :radius="50"
      :depth="50"
      :count="5000"
      :size="0.3"
      :size-attenuation="true"
    />

    <TresPerspectiveCamera :args="[35, 0, 0.5, 5000]" :position="[0, 0, 10]" />
    <Suspense>
      <Lune @end-loading="handLoad" />
    </Suspense>
    <Suspense><Asteroids /></Suspense>
  </TresCanvas>
</template>
<script lang="ts">
export default {
  methods: {
    handLoad() {
      this.$emit("end-loader");
    },
  },
};
</script>
