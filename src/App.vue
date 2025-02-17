<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cards from './pages/Cards.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>

  <div class="w-4/5 mx-auto">
    <AppHeader />
    <Cards />
  </div>

</template>

<style></style>
