User
<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import supabase from "../../lib/supabaseClient.js";
</script>

<template>
  <main :class="{ 'fade-out': gameOver }" @transitionend="handleTransitionEnd">
    <Header @time-zero="handleTime"></Header>

    <section
      class="min-h-screen md:container md:m-auto px-2 flex flex-col gap-7 justify-center items-center"
    >
      <QuestionCard
        :data="currentQuestion"
        @selected-Card="nextQuestion"
      ></QuestionCard>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dataQuestions: ref([]),
      route: useRoute(),
      currentIndex: ref(0),
      currentQuestion: ref({}),
      gameOver: false,
    };
  },
  async mounted() {
    this.handleQuestions();
  },

  methods: {
    async handleQuestions() {
      const { data } = await supabase
        .from("questions")
        .select("*")
        .eq("level", this.route.params.id);
      this.dataQuestions = data;
      if (this.dataQuestions.length > 0) {
        this.currentQuestion = this.dataQuestions[this.currentIndex];
      }
    },
    nextQuestion() {
      setTimeout(() => {
        this.currentIndex++;
        this.handleQuestions();
        if (this.currentIndex >= this.dataQuestions.length) {
          this.gameOver = true;
          return navigateTo("/leaderboard");
        }
      }, 500);
    },
    handleTime() {
      this.gameOver = true;
    },
    handleTransitionEnd() {
      if (this.gameOver) {
        return navigateTo("/leaderboard");
      }
    },
  },
};
</script>