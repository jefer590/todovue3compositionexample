<template>
  <h2 class="text-2xl text-gray-600 font-bold">Pending</h2>

  <TodoListItem
    v-for="(todoItem, index) in pendingList"
    :key="index"
  />

  <h2 class="text-2xl text-gray-600 font-bold">Done</h2>

  <TodoListItem
    v-for="(todoItem, index) in completedList"
    :key="index"
  />
</template>

<script lang="ts">
import type { TodoListItem } from "../types/TodoListTypes";
import { defineComponent, PropType, computed } from "vue";
import TodoListItemComponent from "./TodoListItem.vue";

export default defineComponent({
  components: {
    'TodoListItem': TodoListItemComponent,
  },
  props: {
    items: {
      type: Array as PropType<TodoListItem[]>,
      default: () => [] as TodoListItem[]
    }
  },
  setup (props) {
    const pendingList = computed(() => props.items.filter(i => !i.done))
    const completedList = computed(() => props.items.filter(i => i.done))

    return {
      pendingList,
      completedList
    }
  }
});
</script>
