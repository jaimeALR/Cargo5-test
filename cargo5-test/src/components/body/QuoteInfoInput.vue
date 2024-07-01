<template>
  <div></div>
  <div class="bg-gray-100 flex flex-col items-center">
    <!-- Quote Summary Section -->
    <div
      class="w-full max-w-6xl bg-white border border-gray-300 rounded-xl p-6 shadow-md"
    >
      <div class="mb-4 border-b-2">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <img src="../../assets/grid.svg" class="w-8 h-8 mr-3" alt="Grid" />
            <p class="text-gray-600 text-xl mr-2">FCL</p>
            <p class="text-xl font-bold">Quote ID:</p>
            <p class="text-xl font-bold px-1">CA-2251</p>
            <a href="">
              <img
                src="../../assets/edit-pen.svg"
                class="w-4 h-4 mr-4 ml-1"
                alt="Pen"
              />
            </a>
            <div class="ml-2">
              <select
                class="font-roboto border-2 rounded-3xl text-gray-800 border-gray-200 bg-purple-200 bg-opacity-40 p-1 pr-5"
              >
                <option>Draft</option>
              </select>
            </div>
          </div>
          <div class="flex items-center">
            <p class="text-gray-600 text-lg mx-2">
              1 USD = 1.1 EUR | 1 USD = 7.09 CNY
            </p>
            <button class="text-gray-700 font-semibold">Manage Currency</button>
            <!-- SVG icon content -->
            <a href="">
              <img
                src="../../assets/edit-pen.svg"
                class="w-4 h-4 ml-2"
                alt="Pen"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Quote summary -->
      <div class="flex flex-row gap-6">
        <!-- General Section -->
        <div class="w-full">
          <h2 class="font-roboto font-bold text-lg mb-2">General</h2>
          <div class="grid grid-cols-2 gap-6">
            <!-- Owner -->
            <div class="flex flex-col">
              <label class="font-roboto text-gray-600 text-lg">Owner</label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select v-model="selectedOwner"
                  :class="{
                    'text-gray-500 w-full': !selectedOwner,
                    'text-gray-950 w-full': selectedOwner,
                  }">
                  <option selected disabled value="">Name</option>
                  <option class="text-gray-950" >Andrés Ramírez</option>
                  <option class="text-gray-950">Fabio Valentin</option>
                  <option class="text-gray-950">James Brown</option>
                  <option class="text-gray-950">Messi 10</option>
                </select>
              </div>
            </div>

            <!-- Company -->
            <div class="flex flex-col">
              <label class="font-roboto text-gray-600 text-lg">Company</label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select v-model="selectedCompany"
                  :class="{
                    'text-gray-500 w-full': !selectedCompany,
                    'text-gray-950 w-full': selectedCompany,
                  }">
                  <option  selected disabled value="">Company whom it...</option>
                  <option class="text-gray-950">Evergreen</option>
                  <option class="text-gray-950">CMA CGM</option>
                  <option class="text-gray-950">Maerks</option>
                </select>
              </div>
            </div>
            <!-- Kind of cargo -->
            <div class="flex flex-col">
              <label class="font-roboto text-gray-600 text-lg"
                >Kind of Cargo</label
              >
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select v-model="selectedCargo"
                  :class="{
                    'text-gray-500 w-full': !selectedCargo,
                    'text-gray-950 w-full': selectedCargo,
                  }">
                  <option  selected disabled value="">Whom it may conc...</option>
                  <option class="text-gray-950" >CEO</option>
                  <option class="text-gray-950">CTO</option>
                  <option class="text-gray-950">Administrative</option>
                </select>
              </div>
            </div>
            <!-- Contact -->
            <div class="flex flex-col">
              <label class="font-roboto text-gray-600 text-lg">Contact</label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select class="w-full">
                  <option disabled selected>Select company first</option>
                  
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Details Section -->
        <div class="w-full">
          <h2 class="font-roboto font-bold text-lg mb-2">Details</h2>
          <div class="grid grid-cols-2 gap-6">
            <!-- Validity (date picker) -->
            <div class="flex flex-col">
              <label class="font-roboto text-gray-600 text-lg">Validity</label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <input type="date" v-model="selectedDate" :class="{
                    'text-gray-500 w-full bg-transparent outline-none': !selectedDate,
                    'text-gray-950 w-full bg-transparent outline-none': selectedDate,
                  }" />
              </div>
            </div>
            
            <!-- Incoterm -->
            <div class="flex flex-col">
              <label class="font-roboto text-gray-600 text-lg">Incoterm</label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select
                  v-model="selectedIncoterms"
                  :class="{
                    'text-gray-500 w-full': !selectedIncoterms,
                    'text-gray-950 w-full': selectedIncoterms,
                  }"
                >
                  <option selected value="">Select Incoterm</option>
                  <option
                    v-for="incoterm in incoterms"
                    :key="incoterm?.id"
                    class="text-gray-950"
                  >
                    {{ incoterm?.name }}
                  </option>
                </select>
              </div>
            </div>
            <!-- Payment Conditions -->
            <div class="flex flex-col">
              <label class="font-roboto text-gray-600 text-lg"
                >Payment Conditions</label
              >
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <input
                  type="text"
                  class="w-full bg-transparent outline-none"
                  placeholder="Enter your payments..."
                />
              </div>
            </div>
            <!-- Language -->
            <div class="flex flex-col">
              <label class="font-roboto text-gray-600 text-lg">Language</label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select
                  v-model="selectedLanguage"
                  :class="{
                    'text-gray-500 w-full': !selectedLanguage,
                    'text-gray-950 w-full': selectedLanguage,
                  }"
                >
                  <option disabled value="" selected>Select a language</option>
                  <option
                    v-for="language in languages"
                    :key="language.id"
                    class="text-gray-950"
                  >
                    {{ language.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Languages } from "../../models/languages.model";
import { Incoterms } from "../../models/incoterms.model";

import { ref, onMounted } from "vue";
import { fetchAllData } from "../../utils/api";

const incoterms = ref<Incoterms[]>([]);
const languages = ref<Languages[]>([]);
/* Use selectedValue to get the value of the input/dropBox */
const selectedLanguage = ref<string | null>("");
const selectedIncoterms = ref<string | null>("");
const selectedOwner = ref<string | null>("");
const selectedCargo = ref<string | null>("");
const selectedDate = ref<string | null>("");
const paymentConditionValue = ref<string | null>("");
const selectedCompany = ref<string | null>('');

// const owners = ref([]);
// const clients = ref([]);
// const kind_of_cargo = ref([]);
/* const contacts = ref([]); */
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    const data = await fetchAllData();
    languages.value = data.languages.data;
    incoterms.value = data.incoterms.data;
    /* TODO get info API */
    // owners.value = data.owners;
    // clients.value = data.clients;
    // kind_of_cargo.value = data.kind_of_cargo;
    /* contacts.value = data.contacts; */
  } catch (err) {
    console.error("Error fetching data:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
