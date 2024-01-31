<script setup>
import { useRoute } from "vue-router";
import supabase from "../../lib/supabaseClient.js";
</script>

<template>
  <Header></Header>
  <section
    class="min-h-screen md:container md:m-auto px-2 flex flex-col gap-7 justify-center items-center"
  >
    <QuestionCard :data="currentQuestion"></QuestionCard>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataQuestions: [],
      route: useRoute(),
      currentIndex: 0,
      currentQuestion: {},
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
        .eq("level",  this.route.params.id);

      this.dataQuestions = data;
      if(this.dataQuestions.length > 0){
        this.currentQuestion = this.dataQuestions[this.currentIndex];
      }
      
      console.log(this.currentQuestion);
    },
  },
};
</script>
