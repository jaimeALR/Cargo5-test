<template>
    <div class="flex flex-col p-4 mx-4 bg-white">
        <div class="mb-3">
            <h1 class="flex text-gray-800 font-roboto font-bold text-2xl">Quote Summary</h1>
        </div>
        <QuoteInfoInputs />
        <div class="mb-3 flex text-gray-800 justify-between">
            <h1 class="flex font-roboto font-bold text-2xl pt-5 pb-1">Routes</h1>
            <button class="font-roboto text-xl font-medium text-blue-800 mt-4">
                <link>+ Add Rate</link>
            </button>
        </div>
        <RutasGroup/>
        <h1 class="flex text-gray-800 font-roboto font-medium text-xl mt-6 mb-2">Terms and conditions in English</h1>
        <div class="mb-6">
            <QuillEditor/>
        </div>
  </div>
    

</template>

<script setup lang="ts">
import QuoteInfoInputs from './body/QuoteInfoInput.vue'
import RutasGroup from './body/RutasGroup.vue'
import QuillEditor from './QuillEditor.vue'


</script>