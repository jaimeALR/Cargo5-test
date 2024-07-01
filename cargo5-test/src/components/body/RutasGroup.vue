<template>
  <div class="flex flex-col items-center">
    <div class="w-full max-w-6xl border-gray-300 shadow-md">
      <div class="bg-blue-200 bg-opacity-60 border rounded-t-lg">
        <div class="flex m-3 pl-1">
          <img
            src="../../assets/home.svg"
            class="w-6 h-6"
            alt="Depart location"
          />
          <p class="text-gray-800 text-xl font-md mx-1">Xativa, ES</p>
          <img
            src="../../assets/connectorv2.svg"
            class="w-22 h-6 mt-1"
            alt="Connector"
          />
          <img src="../../assets/anchor.svg" class="w-6 h-6" alt="Arrival" />
          <p class="text-gray-800 text-xl font-md mx-1">Valencia, ESVCN</p>
          <img
            src="../../assets/connectorv2.svg"
            class="w-22 h-6 mt-1"
            alt="Connector"
          />
          <img src="../../assets/anchor.svg" class="w-6 h-6" alt="Arrival" />
          <p class="text-gray-800 text-xl font-md mx-1">Shangai, CHSHA</p>
        </div>
      </div>
      <div
        class="flex items-center max-w-6xl border-gray-300 border rounded shadow-md m-4"
      >
        <img
          src="../../assets/points2.svg"
          class="w-3 h-4 ml-6 mr-9"
          alt="Options"
        />
        <img
          src="../../assets/evergreen.jpg"
          class="w-18 h-12 mr-24"
          alt="Logo"
        />
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <template v-for="item in items" :key="item.containerName">
              <div class="">
                <div class="px-4 py-4">
                  <div class="font-bold text-xl mb-1">
                    {{ item.containerName }}
                  </div>
                  <div class="text-gray-700 text-base">
                    <div
                      v-for="row in item.rows"
                      :key="row.title"
                      :class="getRowClass(row.title)"
                    >
                      <span class="font-medium">{{ row.title }}</span>
                      <span>{{ row.value }}</span>
                      <br v-if="row !== item.rows.slice(-1)[0]" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div
        class="flex items-center max-w-6xl border-gray-300 border rounded shadow-md m-4"
      >
        <img
          src="../../assets/points2.svg"
          class="w-3 h-4 ml-6 mr-10"
          alt="Options"
        />
        <img src="../../assets/cmacgm.jpg" class="w-18 h-12 mr-28" alt="Logo" />
        <div class="container mx-auto">
          <div class="flex items-center">
            <template v-for="item in items" :key="item.containerName">
              <div>
                <div class="mt-10">
                  <div
                    v-for="row in item.rows"
                    :key="row.title"
                    :class="getRowClass(row.title), 'flex '"
                  >
                    <span class="font-medium">{{ row.title }}</span>
                    <br v-if="row !== item.rows.slice(-1)[0]" />
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end ">
                <div class="font-bold text-xl text-gray-500 mt-3 mr-2">
                  {{ item.containerName }}
                </div>
                <div class="pl-3  flex items-end">
                  <div class="text-gray-600 py-3">
                    <div v-for="row in item.rows" :key="row.title">
                      <span>{{ row.value }}</span>
                      <br v-if="row !== item.rows.slice(-1)[0]" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    containerName: "20DV",
    rows: [
      { title: "      Cost", value: "9,999,00" },
      { title: "    Profit", value: "(20%)99,00" },
      { title: "Sale total", value: "9,999,00 USD" },
    ],
  },
  {
    containerName: "40DV",
    rows: [
      { title: "", value: "9,999,00" },
      { title: "", value: "(20%)99,00" },
      { title: "", value: "9,999,00 USD" },
    ],
  },
  {
    containerName: "40HC",
    rows: [
      { title: "", value: "9,999,00" },
      { title: "", value: "(20%)99,00" },
      { title: "", value: "9,999,00 USD" },
    ],
  },
];

function getRowClass(title: string) {
  switch (title) {
    case "Cost":
      return "text-blue-500"; // Example class for Cost row
    case "Profit":
      return "text-green-500"; // Example class for Profit row
    case "Sale total":
      return "text-purple-500"; // Example class for Sale total row
    default:
      return "";
  }
}
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
