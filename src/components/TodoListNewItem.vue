<template>
  <div class="flex mt-4">
    <input
      v-model="newTaskText"
      type="text"
      class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700 outline-none"
      placeholder="Add new todo"
      @keyup.enter="createTaskEmit"
    />
    <button
      class="focus:outline-none p-2 flex-shrink-0 border-2 rounded text-teal-400 border-teal-400 hover:text-white hover:bg-teal-400 transition duration-300 ease-in-out outline-none"
      @click="createTaskEmit"
    >
      Add
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["create-task"],
  setup(_, context) {
    const newTaskText = ref("");

    const createTaskEmit = () => {
      context.emit("create-task", newTaskText.value);
      newTaskText.value = "";
    };

    return {
      newTaskText,
      createTaskEmit
    };
  }
});
</script>
