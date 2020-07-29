<template>
  <div class="h-screen w-full flex items-center justify-center font-sans">
    <div class="bg-white rounded shadow p-6 w-full lg:w-3/4 lg:max-w-lg m-auto">
      <div class="mb-4">
        <h1 class="text-3xl text-gray-700 font-bold">Todo List</h1>
        <TodoListNewItem />
      </div>
      <TodoList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoListNewItem from "./components/TodoListNewItem.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  components: {
    TodoList,
    TodoListNewItem
  }
});
</script>
