<template>
  <h2 class="text-2xl text-gray-600 font-bold">Pending</h2>
  <TodoListItem
    v-for="todoItem in pendingList"
    :id="todoItem.id"
    :key="todoItem.id"
    :name="todoItem.task"
    :done="todoItem.done"
    @done-task="id => emitDoneTask(id)"
    @delete-task="id => emitDeleteTask(id)"
  />

  <h2 class="text-2xl text-gray-600 font-bold">Done</h2>
  <TodoListItem
    v-for="todoItem in completedList"
    :id="todoItem.id"
    :key="todoItem.id"
    :name="todoItem.task"
    :done="todoItem.done"
    @delete-task="id => emitDeleteTask(id)"
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
  emits: ["done-task", "delete-task"],
  setup (props, context) {
    const pendingList = computed(() => props.items.filter(i => !i.done))
    const completedList = computed(() => props.items.filter(i => i.done))

    const emitDoneTask = (id: string) => context.emit("done-task", id);
    const emitDeleteTask = (id: string) => context.emit("delete-task", id);

    return {
      pendingList,
      completedList,
      emitDoneTask,
      emitDeleteTask
    }
  }
});
</script>
