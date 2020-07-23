<template>
  <div class="flex mb-4 items-center">
    <p class="w-full text-green-700 font-normal">
      Add another component to Tailwind Components askdhjhaskdh
    </p>
    <button
      class="flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 hover:bg-green-400 border-green-400 focus:outline-none"
    >
      <i class="fa fa-check" aria-hidden="true"></i>
    </button>
    <button
      class="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-400 hover:text-white hover:bg-red-400 border-red-400 focus:outline-none"
    >
      <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
  </div>
  <div class="flex mb-4 items-center">
    <p class="w-full line-through text-gray-500">
      Submit Todo App Component to Tailwind Components
    </p>
        <button
      class="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-400 hover:text-white hover:bg-red-400 border-red-400 focus:outline-none"
    >
      <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
