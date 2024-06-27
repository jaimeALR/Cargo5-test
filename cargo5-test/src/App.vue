<script setup lang="ts">
import { onMounted, ref } from "vue";
import PageHeader from "./components/PageHeader.vue";
import CountryList from "./components/CountryList.vue";
import Navbar from './components/Navbar.vue'
import axiosClient from "./utils/axios";
import { Country } from "./models/country.model";

const countries = ref<Country[]>([]);


const fetchCountries = async () => {
  try {
    const { data } = await axiosClient.get("/all");
    countries.value = data;
  } catch (error) {
    console.log(error);
  }
};

const filterCountries = () => {
  console.log('searching')
}

onMounted(() => {
  fetchCountries();
});
</script>

<template>
  <Navbar />
  <PageHeader />
  <div class="container max-w-screen-lg mx-auto px-6">
    <div class="mb-8">
      <input
       type="text"
       class="border border-gray-300 rounded w-full p-1 px-4"
       placeholder="Search by country name"
       @input="filterCountries" />
    </div>
    <CountryList :countries="countries" />
  </div>
</template>

<style scoped></style>
