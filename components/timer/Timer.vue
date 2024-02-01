import type { space } from 'postcss/lib/list';
<template>
  <div
    class="flex items-center justify-center w-20 h-20 bg-primary rounded-full"
  >
    <span class="text-white text-2xl"> {{ time }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 60,
      
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },
  mounted() {
    this.timerInterval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(this.timerInterval);
        this.$emit("timeout")
      }
    }, 1000);
  },
};
</script>
