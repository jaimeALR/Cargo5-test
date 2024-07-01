<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import HeadQuoteContent from "./components/HeadQuoteContent.vue";
import QuoteBody from "./components/QuoteBody.vue";
</script>

<template>
  <Navbar />
  <div class="container max-w-screen-lg mx-auto pb-20 px-4 bg-slate-100">
    <HeadQuoteContent />
    <QuoteBody />
    <div>

    </div>
  </div>
</template>

<style scoped></style>
