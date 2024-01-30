<template>
  <section
    class="flex flex-col md:container md:m-auto px-2 justify-center items-center gap-6 h-screen"
  >
    <h2 class="text-3xl font-bold text-white">Choisir votre niveau</h2>
    <div class="w-full flex justify-center items-center z-20 gap-6">
      <LevelCard level="Débutant" image="debutant.svg"></LevelCard>
      <LevelCard level="Intermédiaire"></LevelCard>
      <LevelCard level="Expert"></LevelCard>
    </div>
  </section>
</template>
