<template>
  <section
    class="md:container md:m-auto px-2 min-h-screen flex justify-center items-center"
  >
    <img
      src="../assets/media/planet.png"
      alt="planets illustration"
      class="absolute animate-spin h-planetsSize -z-10 right-80"
      style="animation: spin 50s linear infinite"
    />
    <div class="w-full flex justify-center items-center h-screen z-20">
      <AccueilCard />
    </div>
    <footer>
      <img src="../assets/media/terre.png" alt="planete terre" class="z-50" />
    </footer>
  </section>
</template>
