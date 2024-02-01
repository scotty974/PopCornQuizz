<template>
    <div class="bg-primary bg-opacity-20 w-52 h-52 flex items-center justify-center flex-col px-4 rounded-3xl">
        <h2 class="text-white text-4xl mb-2">{{ pseudo }}</h2>
        <p class="text-white text-xl">Ton score : {{ score }}</p>
    </div>
</template>
<script>
export default {
    props : {
        pseudo : String,
        score : Number
    }
}
</script>