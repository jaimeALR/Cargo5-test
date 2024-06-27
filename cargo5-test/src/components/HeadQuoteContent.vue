<template>
    <div class="flex items-center justify-center">
        <div class=" border border-gray-300 rounded my-10 bg-white">
            <Disclosure as="nav" class=" flex items-center">
                <div class="max-w-4xl sm:px-6 lg:px-2">
                    <div class="relative flex h-11 items-center justify-start">
                        <div class="flex flex-1 items-start justify-start sm:items-stretch sm:justify-start">
                            <div class="hidden sm:block">
                                <div class="flex space-x-2">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                                        :class="[item.current ? 'bg-blue-100 bg-opacity-80 transition duration-200 text-blue-900' : 'text-gray-900 hover:bg-blue-100 bg-opacity-40 transition duration-200 hover:text-blue-900', 'rounded-md px-2 py-1 text-lg font-medium']"
                                        :aria-current="item.current ? 'page' : undefined">{{ item.name }}
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
                class="flex items-center justify-between border-2 border-blue-900 text-blue-900 hover:text-blue-600 font-roboto py-2 px-4   ml-4 rounded focus:outline-none">
                <svg viewBox="0 0 15.00 15.00" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2"
                    transform="matrix(1, 0, 0, -1, 0, 0)" stroke="#002d6c" stroke-width="0.00015000000000000001">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                        stroke-width="0.03"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.5 4C0.223858 4 0 4.22386 0 4.5V10.5C0 10.7761 0.223858 11 0.5 11H14.5C14.7761 11 15 10.7761 15 10.5V4.5C15 4.22386 14.7761 4 14.5 4H0.5ZM1 10V5H2.075V7.5C2.075 7.73472 2.26528 7.925 2.5 7.925C2.73472 7.925 2.925 7.73472 2.925 7.5V5H4.075V6.5C4.075 6.73472 4.26528 6.925 4.5 6.925C4.73472 6.925 4.925 6.73472 4.925 6.5V5H6.075V6.5C6.075 6.73472 6.26528 6.925 6.5 6.925C6.73472 6.925 6.925 6.73472 6.925 6.5V5H8.075V7.5C8.075 7.73472 8.26528 7.925 8.5 7.925C8.73472 7.925 8.925 7.73472 8.925 7.5V5H10.075V6.5C10.075 6.73472 10.2653 6.925 10.5 6.925C10.7347 6.925 10.925 6.73472 10.925 6.5V5H12.075V6.5C12.075 6.73472 12.2653 6.925 12.5 6.925C12.7347 6.925 12.925 6.73472 12.925 6.5V5H14V10H1Z"
                            fill="#002d6c"></path>
                    </g>
                </svg>
                <span>Rule</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-down w-4 h-4 ml-2 " viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
            </button>

            <button
                class="bg-blue-900 hover:bg-blue-800 text-white font-roboto px-4 rounded inline-flex items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-eye w-4 h-4 mr-2"
                    viewBox="0 0 16 16">
                    <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
                <span>Preview</span>
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">

import { Disclosure } from '@headlessui/vue'

const navigation = [
    { name: 'Quote summary', href: '#', current: true },
    { name: 'Ocean freight', href: '#', current: false },
    { name: 'Origin charges', href: '#', current: false },
    { name: 'Destination charges', href: '#', current: false },
    { name: 'Totals', href: '#', current: false },

]
</script>