<script setup>
import { useRoute } from "vue-router";
import supabase from "../../lib/supabaseClient.js";
</script>
<template>
  <Header></Header>
  <section
    class="min-h-screen md:container md:m-auto px-2 flex flex-col gap-7 justify-center items-center"
  >
    <QuestionCard
      v-for="question in dataQuestions"
      :question="question.question"
      :data="dataQuestions"
    ></QuestionCard>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataQuestions: [],
      route: useRoute(),
    };
  },
  mounted() {
    this.handleQuestions();
  },
  methods: {
    async handleQuestions() {
      const { data } = await supabase
        .from("questions")
        .select("*")
        .eq("level", this.route.params.id);

      this.dataQuestions = data;
    },
  },
};
</script>
