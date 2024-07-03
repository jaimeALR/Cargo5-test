<template>
  <div class="bg-gray-100 flex flex-col items-center rounded-xl">
    <!-- Quote Summary Section -->
    <div
      class="w-full max-w-6xl bg-white border border-gray-300 rounded-xl p-6 "
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
                class="w-4 h-4 mr-2 ml-1"
                alt="Pen"
              />
            </a>
            <div >
              <select
                class="font-roboto border-2 rounded-3xl text-gray-800 text-sm border-gray-200 bg-purple-200 bg-opacity-40 pl-1 pr-7"
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
              <label class="font-roboto text-lg">Owner</label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select
                  v-model="selectedOwner"
                  :class="{
                    'text-gray-500 w-full cursor-pointer': !selectedOwner,
                    'text-gray-950 w-full cursor-pointer': selectedOwner,
                  }"
                >
                  <option selected disabled value="">Name</option>
                  <option class="text-gray-950">Andrés Ramírez</option>
                  <option class="text-gray-950">Fabio Valentin</option>
                  <option class="text-gray-950">James Brown</option>
                  <option class="text-gray-950">Messi 10</option>
                </select>
              </div>
            </div>

            <!-- Company -->
            <div class="flex flex-col">
              <label class="flex font-roboto text-lg"
                >Company
                <p class="text-red-600 font-semibold ml-2">*</p>
              </label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select
                  v-model="selectedCompany"
                  :class="{
                    'text-gray-500 w-full cursor-pointer': !selectedCompany,
                    'text-gray-950 w-full cursor-pointer': selectedCompany,
                  }"
                >
                  <option selected disabled value="">Company whom it...</option>
                  <option class="text-gray-950" value="Evergreen">
                    Evergreen
                  </option>
                  <option class="text-gray-950" value="CMA CGM">CMA CGM</option>
                  <option class="text-gray-950" value="Maersk">Maersk</option>
                </select>
              </div>
            </div>

            <!-- Kind of cargo -->
            <div class="flex flex-col">
              <label class="font-roboto text-lg flex"
                >Kind of Cargo
                <p class="text-red-600 font-semibold ml-2">*</p>
              </label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select
                  v-model="selectedCargo"
                  :class="{
                    'text-gray-500 w-full cursor-pointer': !selectedCargo,
                    'text-gray-950 w-full cursor-pointer': selectedCargo,
                  }"
                >
                  <option selected disabled value="">
                    Whom it may conc...
                  </option>
                  <option class="text-gray-950">CEO</option>
                  <option class="text-gray-950">CTO</option>
                  <option class="text-gray-950">Administrative</option>
                </select>
              </div>
            </div>

            <!-- Contact -->
            <div class="flex flex-col">
              <label class="flex font-roboto text-lg">
                Contact
                <p class="text-red-600 font-semibold ml-2">*</p>
              </label>
              <div
                class="border-2 rounded-lg border-gray-200 flex items-center"
              >
                <select
                  v-model="selectedContact"
                  :disabled="!selectedCompany"
                  :class="[
                    'w-full p-2 border rounded cursor-pointer',
                    !selectedCompany
                      ? ' bg-purple-200 bg-opacity-40 cursor-pointer'
                      : 'text-gray-900 bg-white cursor-pointer',
                  ]"
                >
                  <option disabled value="">Select company first</option>
                  <option
                    v-for="contact in contacts"
                    :key="contact"
                    :value="contact"
                  >
                    {{ contact }}
                  </option>
                  <option>company@gmail.com</option>
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
              <label class="flex font-roboto text-lg"
                >Validity
                <p class="text-red-600 font-semibold ml-2">*</p>
              </label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <input
                  type="date"
                  v-model="selectedDate"
                  :class="{
                    'text-gray-500 w-full bg-transparent outline-none cursor-pointer':
                      !selectedDate,
                    'text-gray-950 w-full bg-transparent outline-none cursor-pointer':
                      selectedDate,
                  }"
                />
              </div>
            </div>

            <!-- Incoterm -->
            <div class="flex flex-col">
              <label class="flex font-roboto text-lg"
                >Incoterm
                <p class="text-red-600 font-semibold ml-2">*</p>
              </label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select
                  v-model="selectedIncoterms"
                  :class="{
                    'text-gray-500 w-full cursor-pointer': !selectedIncoterms,
                    'text-gray-950 w-full cursor-pointer': selectedIncoterms,
                  }"
                >
                  <option selected disabled value>Select Incoterm</option>
                  <option v-for="incoterm in incoterms" class="text-gray-950">
                    {{ incoterm?.name }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Payment Conditions -->
            <div class="flex flex-col">
              <label class="font-roboto text-lg">Payment Conditions</label>
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
              <label class="font-roboto text-lg">Language</label>
              <div
                class="border-2 rounded-lg border-gray-200 p-2 flex items-center"
              >
                <select
                  v-model="selectedLanguage"
                  :class="{
                    'text-gray-500 w-full cursor-pointer': !selectedLanguage,
                    'text-gray-950 w-full cursor-pointer': selectedLanguage,
                  }"
                >
                  <option disabled value="" selected>Select a language</option>
                  <option v-for="language in languages" class="text-gray-950">
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
import { ref, onMounted } from "vue";
import { Languages } from "../../models/languages.model";
import { Incoterms } from "../../models/incoterms.model";
import { fetchAllData } from "../../utils/api"; // Mock function to fetch contacts based on the company

/* Use selectedValue to get the value of the input/dropBox */
const selectedLanguage = ref<string | null>("");
const selectedIncoterms = ref<string | null>("");
const selectedOwner = ref<string | null>("");
const selectedCargo = ref<string | null>("");
const selectedDate = ref<string | null>("");
const selectedCompany = ref<string | null>("");
const selectedContact = ref<string | null>("");

/* TS models */
const incoterms = ref<Incoterms[]>([]);
const languages = ref<Languages[]>([]);
const contacts = ref<string[]>([]); // This will store contacts based on the selected company

const loading = ref(false);

/* Fetch initial data */
onMounted(async () => {
  loading.value = true;
  try {
    // Fetch all required data when the component is mounted
    const data = await fetchAllData();
    languages.value = data.languages.data;
    incoterms.value = data.incoterms.data;
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
