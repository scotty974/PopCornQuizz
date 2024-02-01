<script setup>
import supabase from "../../lib/supabaseClient.js";
import userCard from '../../components/userCard/userCard.js'
</script>

<template>
  <div>
    <div class="night">
      <div v-for="index in 20" :key="index" class="shooting_star"></div>
    </div>
  </div>
  <Header />

  <section
    class="min-h-screen md:container md:m-auto px-2 flex justify-center items-center"
  >
  
    <div class="w-full flex justify-around items-center z-20">
      <UserCard :pseudo="user.userPseudo" :score="user.userScore"/>
      <LeaderBoard :users="users"></LeaderBoard>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      users: [],
      user : []
    };
  },
  mounted() {
    this.handleUserData()
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    this.handleUsers();
    // JavaScript pour générer les étoiles
    const nightContainer = document.querySelector(".night");

    for (let i = 0; i < 20; i++) {
      const shootingStar = document.createElement("div");
      shootingStar.classList.add("shooting_star");

      // Génération de positions aléatoires
      const topPosition = Math.floor(Math.random() * 100) + 1;
      const leftPosition = Math.floor(Math.random() * 100) + 1;

      // Application des positions aléatoires
      shootingStar.style.top = `${topPosition}%`;
      shootingStar.style.left = `${leftPosition}%`;

      nightContainer.appendChild(shootingStar);
      
    }
  },

  methods: {
    async handleUsers() {
      const { data } = await supabase.from("user").select("*");
      this.users = data;
      this.sortUsers();
    },

    //fonction pour filtrer l'affichage des users par rapport au score (du plus grand au plus petit)
    sortUsers() {
      this.users.sort((a, b) => b.score - a.score);
    },
     handleUserData(){
      this.user =  userCard()
      
    }
  },
};
</script>
