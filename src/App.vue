<template>
  <header>
    <TodoListNewItem />
  </header>
  <main>main</main>
  <footer>footer</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoListNewItem from './components/TodoListNewItem.vue'

export default defineComponent({
  components: {
    TodoListNewItem
  }
})
</script>
