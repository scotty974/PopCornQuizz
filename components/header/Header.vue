<template>
  <header class="absolute h-52 px-6 py-4 w-screen">
    <nav>
      <NuxtLink to="/">
        <img class="m-3" src="/assets/media/logoSpaceQuizz3.svg" alt="" />
      </NuxtLink>
    </nav>
  </header>
  <Timer
    v-if="isQuestionPage"
    class="absolute right-0 m-8"
    @timeout="handleTime"
  ></Timer>
</template>

<script>
export default {
  emits: ["time-zero"],
  computed: {
    isQuestionPage() {
      return this.$route.name === "question-id";
    },
  },
  methods: {
    handleTime() {
      this.$emit("time-zero");
    },
  },
};
</script>
