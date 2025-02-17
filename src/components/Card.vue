<script setup lang='ts'>
defineProps({
    title: String,
    imageUrl: String,
    price: Number,
    isFavorite: Boolean
})


</script>


<template>
    <div class="card relative bg-zinc-700 rounded-lg w-[200px] cursor-pointer shadow-md hover:shadow-xl hover:translate-y-[-2px]">
            <img class="absolute top-[10px] right-[10px] favorit-ico" :src="!isFavorite ? '/src/pictures/like-1.svg' : '/src/pictures/like-2.svg'" alt="">
            <img class="size-[200px] object-cover rounded-lg" :src="imageUrl" alt="card">
            <p class="p-2">{{ title }}</p>
            <p class="p-1 text-center">{{ price }} р.</p>
        </div>
</template>


<style scoped>

</style>