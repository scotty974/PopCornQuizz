
import type { Lune } from '#build/components';
<script setup lang="ts">
import { ref } from 'vue';
import {useGLTF} from '@tresjs/cientos'
const {scene} = await useGLTF("scene.gltf", {draco : true})
const lune = ref<TresInstance | null>(null);
  const { onLoop } = useRenderLoop();

  onLoop(({delta, elapsed})=>{
    if(lune.value){
      lune.value.rotation.y = elapsed * 0.1;
    }
  })

</script>

<template>
  <primitive :object="scene" ref="lune"/>
</template>
