<template>


  <Disclosure as="nav" class="bg-blue-900 flex items-center" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img id="logo" src="https://cargofive.com/wp-content/themes/cargofive/logo-cargofive.svg" alt="Cargofive"
              class="w-40 h-10"
              style="filter: invert(99%) sepia(99%) saturate(24%) hue-rotate(180deg) brightness(105%) contrast(100%);">

          </div>
          <div class="hidden sm:ml-6 sm:block">

            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'bg-gray-700 text-white' : 'text-white hover:bg-blue-700 hover:text-white', 'rounded-md px-1 py-2 text-sm font-roboto']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div class="pr-2 border-r-2 border-white">
              <MenuButton
                class="flex items-center text-white hover:bg-blue-700 hover:text-white rounded-md px-1 py-1 text-sm font-roboto">
                <div class="flex items-center"><i class="fa-regular fa-circle-user"></i></div>
                <p class="rounded-md px-1 py-2 text-sm font-roboto">Long Username</p>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                  Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <button type="button"
            class="relative rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">

      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Rates', href: '#', current: false },
  { name: 'Quotes', href: '#', current: false },
  { name: 'Contracts', href: '#', current: false },
  { name: 'Local charges', href: '#', current: false },
  { name: 'Inland', href: '#', current: false },
  { name: 'Shipments', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },

]
</script>