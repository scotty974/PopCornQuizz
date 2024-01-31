<script setup>
import supabase from '../../lib/supabaseClient.js'
</script>
<template>
  <Header></Header>
  <section
    class="min-h-screen md:container md:m-auto px-2 flex flex-col gap-7 justify-center items-center"
  >
    <QuestionCard></QuestionCard>
  </section>
</template>

<script>
export default {
  mounted(){
this.handleQuestions()
  },
  methods : {
    async handleQuestions(){
      const {data} = await supabase.from("questions").select("*")
      console.log(data)
    }
  }
}
</script>
