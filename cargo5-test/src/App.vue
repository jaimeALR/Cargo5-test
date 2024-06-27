<script setup lang="ts">
import { onMounted, ref } from "vue";
import Navbar from './components/Navbar.vue';
import HeadQuoteContent from './components/HeadQuoteContent.vue';
import QuoteBody from './components/QuoteBody.vue'
import { getAxiosInstance } from "./utils/axios";
import { Country } from "./models/country.model";
import { authenticate } from "./utils/auth";


const countries = ref<Country[]>([]);



async function getContacts() {
  const token = await authenticate();
  const axiosInstance = await getAxiosInstance();
  const response = await axiosInstance.get('https://coreapp.cargofive.com/api/v1/front/owners', {
    headers: {
      'Authorization': `Bearer ${token}`
    },

  });

  console.log(response.data);
}




const filterCountries = () => {
  console.log('searching')
}

onMounted(() => {
  
  getContacts();
});
</script>

<template>
  <Navbar />
  <div class="container max-w-screen-lg mx-auto px-6 bg-slate-100">
    <HeadQuoteContent />
    <QuoteBody />

  </div>
</template>

<style scoped></style>
