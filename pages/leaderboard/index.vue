<script setup>
import supabase from "../../lib/supabaseClient.js";
import userCard from "../../components/userCard/userCard.js";
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
    <div class="w-full flex justify-center items-center z-20 gap-8">
      <UserCard
        :pseudo="user.userPseudo"
        :score="user.userScore"
        :userPosition="userPosition"
      />
      <LeaderBoard :users="users" :position="userPosition"></LeaderBoard>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      users: [],
      user: [],
      userPosition: 0,
    };
  },
  async mounted() {
    this.handleUserData();

    await this.sendData();

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
      this.users = this.users.slice(0, 10);

      const userIndex = this.users.findIndex(
        (user) => user.username === this.user.userPseudo
      );
      if (userIndex !== -1) {
        this.userPosition = userIndex + 1; // Ajoute 1 car les indices commencent à 0
      }
    },
    handleUserData() {
      this.user = userCard();
    },
    async sendData() {
      // verifier si l'utilisateur existe dans la base

      const { data } = await supabase
        .from("user")
        .select("*")
        .eq("username", this.user.userPseudo);

      if (data && data.length > 0) {
        await supabase
          .from("user")
          .update({ score: this.user.userScore })
          .eq("username", this.user.userPseudo);
          
         
      } else{
        await supabase
          .from("user")
          .insert([
            { username: this.user.userPseudo, score: this.user.userScore },
          ])
          .select();
          
      }
      this.handleUsers();
    },
  },
};
</script>
