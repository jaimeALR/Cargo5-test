<template>
  <div class="flex items-center justify-center  max-w-5xl">
    <div class="border border-gray-300 rounded-lg my-10 bg-white relative">
      <Disclosure as="nav" class="flex items-center relative ">
        <div class="max-w-4xl sm:px-6 lg:px-2 shadow-md rounded-lg">
          <div class="relative flex h-11 items-center justify-start">
            <div
              class="flex flex-1 items-start justify-start sm:items-stretch sm:justify-start"
            >
              <div class="hidden sm:block">
                <div class="flex space-x-2">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-blue-100 bg-opacity-80 transition duration-200 text-blue-800'
                        : 'text-gray-900 hover:bg-blue-100 bg-opacity-40 transition duration-200 hover:text-blue-900',
                      'rounded-md px-2 py-1 text-lg font-medium',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                    >{{ item.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
    <div class="flex justify-between">
      <button
        class="flex items-center justify-between border-2 border-blue-900 text-blue-900 hover:text-blue-600 font-roboto py-2 px-4 ml-4 rounded focus:outline-none"
      >
        <img src="../assets/rule.svg" class="w-4 h-4 mr-2" alt="Rule" />
        <span>Rule</span>

        <img src="../assets/arrow.svg" class="w-5 h-5 ml-2" alt="Arrow" />
      </button>

      <button
        class="bg-blue-900 hover:bg-blue-800 text-white font-roboto px-4 rounded inline-flex items-center ml-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-eye w-4 h-4 mr-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
          />
          <path
            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
          />
        </svg>
        <span>Preview</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";

const navigation = [
  { name: "Quote summary", href: "#", current: true },
  { name: "Ocean freight", href: "#", current: false },
  { name: "Origin charges", href: "#", current: false },
  { name: "Destination charges", href: "#", current: false },
  { name: "Totals", href: "#", current: false },
];
</script>

