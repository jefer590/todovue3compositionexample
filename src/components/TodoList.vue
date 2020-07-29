<template>
  <h2 class="text-2xl text-gray-600 font-bold">Pending</h2>
  <TodoListItem
    v-for="todoItem in pendingList"
    :id="todoItem.id"
    :key="todoItem.id"
    :name="todoItem.task"
    :done="todoItem.done"
  />

  <h2 class="text-2xl text-gray-600 font-bold">Done</h2>
  <TodoListItem
    v-for="todoItem in completedList"
    :id="todoItem.id"
    :key="todoItem.id"
    :name="todoItem.task"
    :done="todoItem.done"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoApp } from "@/composition/todo";
import TodoListItemComponent from "./TodoListItem.vue";

export default defineComponent({
  components: {
    TodoListItem: TodoListItemComponent
  },
  setup() {
    const { pendingList, completedList } = useTodoApp();

    return {
      pendingList,
      completedList
    };
  }
});
</script>
