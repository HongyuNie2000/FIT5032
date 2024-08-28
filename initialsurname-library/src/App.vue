<script setup>
import BHeader from './components/BHeader.vue'
</script>

<template>
  <div class="main-container">
    <header>
      <BHeader></BHeader>
    </header>
    <main class="main-box">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped></style>
