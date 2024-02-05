<template>
  <main >
    <CanvaCanvas />
    <Header />

    <section
      class="min-h-screen md:container md:m-auto px-2 flex justify-center items-center"
      v-motion-fade
    >
      <div class="w-full flex justify-center items-center z-20">
        <ExplicationCard></ExplicationCard>
      </div>
    </section>  
  </main>
</template>
