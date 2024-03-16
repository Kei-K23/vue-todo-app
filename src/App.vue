<script setup>
import { computed, ref } from "vue";
import Form from "./components/Form.vue";
import List from "./components/List.vue";

const tasks = ref([]);

// add new task  to the list and sort by creation time
function addTask(task) {
  tasks.value.push(task);
  tasks.value = tasks.value
    .sort((a, b) => b.createdAt - a.createdAt)
    .filter((t) => !t.completed);
}

const computedTasks = computed(() => {
  return tasks.value.filter((t) => !t.completed);
});

const computedCompletedTasks = computed(() => {
  return tasks.value.filter((t) => t.completed);
});
</script>

<template>
  <main>
    <h1 class="mt-4 text-2xl italic font-bold text-center text-emerald-600">
      Write your awesome ideas down
    </h1>
    <div class="w-full p-4 mx-auto mt-4 md:w-3/5 xl:w-1/2">
      <Form @add-task="(t) => addTask(t)" />
      <List :tasks="computedTasks" />
      <h3 class="mt-4" v-if="computedCompletedTasks.length > 0">completed</h3>
      <List :tasks="computedCompletedTasks" />
    </div>
  </main>
</template>
