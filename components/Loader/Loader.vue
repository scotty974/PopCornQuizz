<template>
  <div class="absolute w-screen h-screen bg-black z-20">
    <div class="loader-container absolute top-1/2 left-1/2">
      <span class="loader"></span>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
 width: 25%;
 
  transform: translate(-50%, -50%);
}

.loader {
  display: block;
  position: relative;
  height: 12px;
  width: 80%;
  border: 1px solid #fff;
  border-radius: 10px;
  overflow: hidden;
}

.loader::after {
  content: "";
  width: 40%;
  height: 100%;
  background: #ff3d00;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animloader 5s linear infinite;
}

@keyframes animloader {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
}
</style>
