User
<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import supabase from "../../lib/supabaseClient.js";
</script>

<template>
  <main :class="{ 'fade-out': gameOver }" @transitionend="handleTransitionEnd">
    <Header @time-zero="handleTime"></Header>
    <div
      class="absolute w-screen h-screen z-30 pointer-events-none animate-ping bg-opacity-10 duration-1000"
      :class="{
        'bg-green-600': showColorDivGreen,
        'bg-red-600': showColorDivRed,
      }"
    ></div>
    <section
      class="min-h-screen md:container md:m-auto px-2 flex flex-col gap-7 justify-center items-center z-10"
    >
      <QuestionCard
        v-if="dataLoaded"
        :allQuestions="dataQuestions"
        @game-over="dummy"
        @selected-Card="showGreenDiv"
        @show-red-div="showRedDiv"
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
      showColorDivRed: false,
      showColorDivGreen: false,
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
    showGreenDiv() {
      this.showColorDivGreen = true;
      setTimeout(() => {
        this.showColorDivGreen = false;
      }, 1000);
    },
    showRedDiv() {
      this.showColorDivRed = true;
      setTimeout(() => {
        this.showColorDivRed = false;
      }, 1000);
    },
  },
};
</script>
