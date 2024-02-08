<script setup>
import supabase from "../../lib/supabaseClient.js";
import userCard from "../../components/userCard/userCard.js";
import { Howl } from "howler";
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
        v-if="isLoading"
      />
      <LeaderBoard
        :users="users"
        :position="userPosition"
        v-if="isLoading"
      ></LeaderBoard>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      users: [],
      user: [],
      userPosition: 0,
      sound: null,
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

    sortUsers() {
      this.users.sort((a, b) => b.score - a.score);

      const userIndex = this.users.findIndex(
        (user) => user.username === this.user.userPseudo
      );

      // Mettez à jour userPosition en fonction de la position de l'utilisateur
      if (userIndex !== -1) {
        this.userPosition = userIndex + 1; // Ajoute 1 car les indices commencent à 0
      } else {
        // L'utilisateur n'est pas dans les 10 premiers, mais on peut toujours afficher son classement
        const userRank = this.users.findIndex(
          (user) => user.score < this.user.userScore
        );

        this.userPosition =
          userRank !== -1 && userRank < 10 ? userRank + 1 : null;
      }

      // Limitez la liste aux 10 premiers utilisateurs
      this.users = this.users.slice(0, 10);
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
      } else {
        await supabase
          .from("user")
          .insert([
            { username: this.user.userPseudo, score: this.user.userScore },
          ])
          .select();
      }
      this.handleUsers();
      this.isLoading = true;
      this.sound = new Howl({
        src: ["/victory.mp3"],
        volume: 1.0,
        html5: true,
      });
      this.sound.play();
    },
  },
};
</script>
