<template>
  <div class="flex flex-col items-center py-36 min-h-screen bg-gray-100">
    <img
      id="logo"
      src="https://cargofive.com/wp-content/themes/cargofive/logo-cargofive.svg"
      alt="Cargofive"
      class="w-80 h-20 mb-10"
    />
    <div
      class="max-w-2xl mx-auto p-8 border border-gray-300 rounded-lg bg-white shadow-lg"
    >
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

      <form @submit.prevent="login" v-if="!isLoading" class="space-y-6">
        <div>
          <label for="email" class="block text-lg font-medium text-gray-700"
            >Email:</label
          >
          <input
            id="email"
            type="email"
            v-model="email"
            class="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-lg font-medium text-gray-700"
            >Password:</label
          >
          <input
            id="password"
            type="password"
            v-model="password"
            class="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full py-3 px-5 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600"
        >
          Login
        </button>
        <p v-if="errorMessage" class="text-red-500 mt-6 text-center text-lg">
          {{ errorMessage }}
        </p>
      </form>

      <div v-else class="flex items-center justify-center">
        <svg
          class="animate-spin h-7 w-7 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span class="ml-2 text-lg">Logging in...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

// Define the refs for email, password, and errorMessage
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();
const isLoading = ref(false);

// login function
const login = async () => {
  isLoading.value = true;
  errorMessage.value = ""; // Clear any previous error messages
  try {
    const response = await axios.post(
      "https://coreapp.cargofive.com/api/auth/login",
      {
        email: email.value,
        password: password.value,
      }
    );

    const token = response.data.token;
    if (token) {
      localStorage.setItem("authToken", token);
      router.push({ name: "Homepage" });
    } else {
      errorMessage.value = "Invalid login credentials";
    }
  } catch (error) {
    errorMessage.value = "Login failed. Please try again.";
    console.error("Error during login:", error);
  } finally {
    isLoading.value = false; // Reset loading state
  }
};
</script>
