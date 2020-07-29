import type { TodoListItem } from '@/types/TodoListTypes';
import { v4 as uuidv4 } from "uuid";
import { ref, reactive, computed } from "vue";

const data = reactive({
  todoList: [] as TodoListItem[]
});

export function useTodoApp() {
  const newTaskText = ref("");

  const createTask = (): void => {
    data.todoList.push({
      id: uuidv4(),
      task: newTaskText.value,
      done: false,
    });
    newTaskText.value = "";
  };

  const doneTask = (id: string) => {
    const itemIndex = data.todoList.findIndex(i => i.id === id);
    data.todoList[itemIndex].done = true;
  };

  const deleteTask = (id: string) => {
    const itemIndex = data.todoList.findIndex(i => i.id === id);
    data.todoList.splice(itemIndex, 1);
  };

  const pendingList = computed(() => data.todoList.filter(i => !i.done));
  const completedList = computed(() => data.todoList.filter(i => i.done));

  return {
    newTaskText,
    createTask,
    doneTask,
    deleteTask,
    pendingList,
    completedList
  }
}