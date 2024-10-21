<script setup>
import { computed } from 'vue';
import BHeader from './components/BHeader.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const showHeader = computed(()=>  {console.log(route.name)
 return route.name !== 'CountBookAPI'})
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader></BHeader>
    </header>
    <main class="main-box">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped></style>
