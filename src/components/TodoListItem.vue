<template>
  <div class="flex mb-4 items-center">
    <p :class="itemClasses" class="w-full">
      {{ name }}
    </p>
    <button
      v-if="!done"
      class="flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 hover:bg-green-400 border-green-400 focus:outline-none"
      @click="emitDoneTask"
    >
      <i class="fa fa-check" aria-hidden="true"></i>
    </button>
    <button
      class="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-400 hover:text-white hover:bg-red-400 border-red-400 focus:outline-none"
      @click="emitDeleteTask"
    >
      <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  emits: ["done-task", "delete-task"],
  setup(props, context) {
    const itemClasses = reactive({
      "line-through": props.done,
      "text-gray-500": props.done,
      "text-green-700": !props.done,
      "font-normal": !props.done
    });

    const emitDoneTask = () => context.emit("done-task", props.id);
    const emitDeleteTask = () => context.emit("delete-task", props.id);

    return {
      itemClasses,
      emitDoneTask,
      emitDeleteTask
    };
  }
});
</script>
