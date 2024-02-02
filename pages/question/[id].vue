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
        v-if="dataLoaded"
        :allQuestions="dataQuestions"
        @game-over="handleTime"
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
      gameOver: false,
      dataLoaded: false,
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

      // get 3 itens from dataQuestions

      this.dataQuestions = data;
      this.dataLoaded = true;
    },

    handleTime() {
      this.gameOver = true;
    },
    dummy() {
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
