<template>
  <div class="flex flex-col items-center">
    <!-- Outer Container for Quote Information -->
    <div class="w-full max-w-6xl border-gray-300 shadow-md">

      <!-- Departure and Arrival Information Section -->
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
      <!-- Quote Info Card 1 -->
      <div class="flex items-center max-w-6xl border-gray-300 border rounded shadow-md m-4">
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
          <div class="flex items-center flex-end justify-evenly">
            <template v-for="(item, index) in items" :key="item.containerName">
              <div class="mr-4"> 
                <div class="mt-10 flex flex-col items-end justify-end">
                  <div v-for="(row, rowIndex) in item.rows" :key="row.title" class="flex">
                    <span
                      :class="getTitleRowClass(row.title), 'font-medium'"
                    >
                      {{ row.title }}
                    </span>
                    <br v-if="rowIndex !== item.rows.length - 1" />
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end mr-5">
                <div class="font-bold text-xl text-gray-500 mt-3 mr-3">
                  {{ item.containerName }}
                </div>
                <div class="pl-3 ">
                  <div class="text-gray-600 py-3 flex flex-col items-end justify-end">
                    <div
                      v-for="(row, rowIndex) in item.rows"
                      :key="row.title"
                      :class="getValueRowClass(row.value, rowIndex, item.rows.length)"
                    >
                      <span>{{ row.value }}</span>
                      <br v-if="rowIndex !== item.rows.length - 1" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <span class="text-gray-600 font-medium flex mt-24 pt-2">USD</span>

            <button
              class="flex items-center justify-between border-2 border-red-600 text-red-600 hover:text-red-700 font-roboto py-1 px-3 ml-10 mr-2 rounded focus:outline-none"
            >
              <img
                src="../../assets/trash.svg"
                class="w-4 h-4 mr-2"
                alt="Rule"
              />
              <span class="font-semibold">Delete</span>
            </button>
          </div>
        </div>
      </div>
      <!-- Quote Info Card 2 -->
      <div class="flex items-center max-w-6xl border-gray-300 border rounded shadow-md m-4">
        <img
          src="../../assets/points2.svg"
          class="w-3 h-4 ml-6 mr-10"
          alt="Options"
        />
        <img src="../../assets/cmacgm.jpg" class="w-20 h-14 mr-24 " alt="Logo" />
        <div class="container mx-auto">
          <div class="flex items-center justify-evenly">
            <template v-for="item in items" :key="item.containerName">
              <div class="mr-5">
                <div class="mt-10 flex flex-col items-end justify-end">
                  <div v-for="(row, rowIndex) in item.rows" :key="row.title" class="flex">
                    <span
                      :class="getTitleRowClass(row.title), 'font-medium'"
                    >
                      {{ row.title }}
                    </span>
                    <br v-if="rowIndex !== item.rows.length - 1" />
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end mr-5">
                <div class="font-bold text-xl text-gray-500 mt-3 mr-3">
                  {{ item.containerName }}
                </div>
                <div class="pl-3 flex items-end">
                  <div class="text-gray-600 py-3 flex flex-col items-end justify-end">
                    <div
                      v-for="(row, rowIndex) in item.rows"
                      :key="row.title"
                      :class="getValueRowClass(row.value, rowIndex, item.rows.length)"
                    >
                      <span>{{ row.value }}</span>
                      <br v-if="rowIndex !== item.rows.length - 1" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <span class="text-gray-600 font-medium flex mt-24 pt-2">USD</span>
            <!-- Delete Button -->
            <button
              class="flex items-center justify-between border-2 border-red-600 text-red-600 hover:text-red-700 font-roboto py-1 px-3 ml-10 mr-2 rounded focus:outline-none"
            >
              <img
                src="../../assets/trash.svg"
                class="w-4 h-4 mr-2"
                alt="Rule"
              />
              <span class="font-semibold">Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-full max-w-6xl border-gray-300 shadow-md">
      <!-- Departure and Arrival Information Section 2 -->
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
          <p class="text-gray-800 text-xl font-md mx-1">Alicante, ESVCN</p>
          <img
            src="../../assets/connectorv2.svg"
            class="w-22 h-6 mt-1"
            alt="Connector"
          />
          <img src="../../assets/anchor.svg" class="w-6 h-6" alt="Arrival" />
          <p class="text-gray-800 text-xl font-md mx-1">Shangai, CHSHA</p>
        </div>
      </div>
      <!-- Quote Info Card 3 -->
      <div class="flex items-center max-w-6xl border-gray-300 border rounded shadow-md m-4">
        <img
          src="../../assets/points2.svg"
          class="w-3 h-4 ml-6 mr-6"
          alt="Options"
        />
        <img src="../../assets/maersk.jpg" class="w-18 h-12 mr-20" alt="Logo" />
        <div class="container mx-auto">
          <div class="flex items-center justify-evenly">
            <template v-for="item in items" :key="item.containerName">
              <div class="mr-4">
                <div class="mt-10 flex flex-col items-end justify-end">
                  <div v-for="(row, rowIndex) in item.rows" :key="row.title" class="flex">
                    <span
                      :class="getTitleRowClass(row.title), 'font-medium'"
                    >
                      {{ row.title }}
                    </span>
                    <br v-if="rowIndex !== item.rows.length - 1" />
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end mr-5">
                <div class="font-bold text-xl text-gray-500 mt-3 mr-3">
                  {{ item.containerName }}
                </div>
                <div class="pl-3 flex items-end">
                  <div class="text-gray-600 py-3 flex flex-col items-end justify-end">
                    <div
                      v-for="(row, rowIndex) in item.rows"
                      :key="row.title"
                      :class="getValueRowClass(row.value, rowIndex, item.rows.length)"
                    >
                      <span>{{ row.value }}</span>
                      <br v-if="rowIndex !== item.rows.length - 1" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <span class="text-gray-600 font-medium flex mt-24 pt-2">USD</span>
            <!-- Delete button -->
            <button
              class="flex items-center justify-between border-2 border-red-600 text-red-600 hover:text-red-700 font-roboto py-1 px-3 ml-10 mr-2 rounded focus:outline-none"
            >
              <img
                src="../../assets/trash.svg"
                class="w-4 h-4 mr-2"
                alt="Rule"
              />
              <span class="font-semibold">Delete</span>
            </button>
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
      { title: "Cost", value: "9,999,00" },
      { title: "Profit", value: "(20%)99,00" },
      { title: "Sale total", value: "9,999,00" },
    ],
  },
  {
    containerName: "40DV",
    rows: [
      { title: "", value: "9,999,00" },
      { title: "", value: "(20%)99,00" },
      { title: "", value: "9,999,00 " },
    ],
  },
  {
    containerName: "40HC",
    rows: [
      { title: "", value: "9,999,00" },
      { title: "", value: "(20%)99,00" },
      { title: "", value: "9,999,00" },
    ],
  },
];

/* Conditions of style for each Row */

function getTitleRowClass(title: string) {
  switch (title) {
    case "Cost":
      return "text-gray-500 font-medium py-1"; // Example class for Cost row
    case "Profit":
      return "text-green-700 font-medium py-1"; // Example class for Profit row
    case "Sale total":
      return "text-gray-800 font-semibold py-1"; // Example class for Sale total row
    default:
      return "";
  }
}

function getValueRowClass(value: string, index: number, arrayLength: number) {
  // Check if it's the last item in the array
  if (index === arrayLength - 1) {
    return "text-gray-800 py-1 font-semibold"; // Style for the last item
  }
  
  // Check for specific value patterns
  if (value === "9,999,00") {
    return "text-gray-500 py-1"; // Style for the specific value "9,999,00"
  } else if (value.includes("%")) {
    return "text-green-700 font-bold py-1"; // Style for values containing a percentage
  }

  // Default class for other cases
  return "";
}

</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
