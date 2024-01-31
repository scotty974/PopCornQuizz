import type { space } from 'postcss/lib/list';
<template>
  <div
    class="flex items-center justify-center w-20 h-20 bg-primary rounded-full"
  >
    <span class="text-white text-2xl"> 1:00 </span>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
    },
  },
};
</script>
