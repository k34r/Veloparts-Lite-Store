<script setup lang="ts">
import Card from '../components/Card.vue'


</script>


<template>
    <div class="cards flex flex-wrap justify-between gap-4">
        <Card title="Кольцо проставочное рулевой 3мм" image-url="/кольцо_проставочное_3мм.jpg" :price="100"/>
        <Card title="Кольцо проставочное рулевой 3мм" image-url="/кольцо_проставочное_3мм.jpg" :price="100" :is-favorite="true"/>
        <Card title="Кольцо проставочное рулевой 3мм" image-url="/кольцо_проставочное_3мм.jpg" :price="100"/>
        <Card title="Кольцо проставочное рулевой 3мм" image-url="/кольцо_проставочное_3мм.jpg" :price="100"/>
        <Card title="Кольцо проставочное рулевой 3мм" image-url="/кольцо_проставочное_3мм.jpg" :price="100"/>
        <Card title="Кольцо проставочное рулевой 3мм" image-url="/кольцо_проставочное_3мм.jpg" :price="100"/>
    </div>
</template>


<style scoped>
</style>