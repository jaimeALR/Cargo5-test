<!-- src/components/HomePage.vue -->
<template>
  <div class="min-w-max overflow-x-auto">
    <Navbar />
    <div class="container max-w-screen-lg mx-auto pb-20 px-4 bg-gray-100">
      <HeadQuoteContent />
      <QuoteBody />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
import QuoteBody from "./QuoteBody.vue";
import HeadQuoteContent from "./HeadQuoteContent.vue";
</script>

<style scoped>

</style>
