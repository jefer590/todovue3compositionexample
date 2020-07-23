<template>
  <TodoListItem />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  components: {
    TodoListItem
  }
});
</script>
