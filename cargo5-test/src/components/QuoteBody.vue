<template>
    <div class="flex flex-col p-4 mx-4 bg-white">
        <div class="mb-3">
            <h1 class="flex font-roboto font-bold text-xl">Quote Summary</h1>
        </div>
        <QuoteInfoInputs />
    </div>

</template>

<script setup lang="ts">
import QuoteInfoInputs from './body/QuoteInfoInput.vue'
</script>