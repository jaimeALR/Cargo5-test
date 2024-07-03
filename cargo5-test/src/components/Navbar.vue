<template>
  <Disclosure as="nav" class="bg-blue-900 flex items-center" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center flex-1 justify-center sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img
              id="logo"
              src="https://cargofive.com/wp-content/themes/cargofive/logo-cargofive.svg"
              alt="Cargofive"
              class="w-40 h-10"
              style="
                filter: invert(99%) sepia(99%) saturate(24%) hue-rotate(180deg)
                  brightness(105%) contrast(100%);
              "
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-700 text-white'
                    : 'text-white hover:bg-blue-700 hover:text-white',
                  'rounded-md px-1 py-2 text-sm font-roboto',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div class="pr-2 border-r-2 border-white text-white">
              <MenuButton
                class="flex items-center hover:text-white rounded-md px-1 py-1 text-sm font-roboto mr-1 transition duration-300 transform hover:-translate-y-1"
              >
                <div class="flex items-center">
                  <p
                    class="rounded-md px-1 py-2 text-sm font-roboto text-white"
                  >
                    <i class="fa-regular fa-circle-user mr-1"></i>
                    Jaimito R
                  </p>
                </div>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    @click.prevent="signOut"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    @click.prevent="signOut"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <button
            type="button"
            class="text-white p-2 transition duration-300 transform hover:-translate-y-1"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <img src="../assets/notif-circle.svg" class="h-3 w-3 ml-8" />
            <BellIcon class="h-6 w-6 ml-2 mb-3" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2"></div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useRouter } from "vue-router";

const isSigningOut = ref(false);

// Navigation links
const navigation = [
  { name: "Rates", href: "#", current: false },
  { name: "Quotes", href: "#", current: false },
  { name: "Contracts", href: "#", current: false },
  { name: "Local charges", href: "#", current: false },
  { name: "Inland", href: "#", current: false },
  { name: "Shipments", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];

// Use router instance
const router = useRouter();

// Sign out function
const signOut = async () => {
  isSigningOut.value = true;

  try {
    // Simulate sign-out process
    localStorage.removeItem("authToken"); // Remove the token from local storage
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate async operation
    router.push({ name: "Login" }); // Redirect to the login page
  } catch (error) {
    console.error("Error during sign-out:", error);
  } finally {
    isSigningOut.value = false; // Reset loading state
  }
};
</script>

<style scoped></style>
