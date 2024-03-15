<script setup>
import { ref } from "vue";
import Form from "./components/Form.vue";

const tasks = ref([]);

function addTask(task) {
  tasks.value.push(task);
}
</script>

<template>
  <main>
    <h1 class="mt-4 italic font-bold text-xl text-center">
      Write your awesome ideas down
    </h1>
    <Form @add-task="(t) => addTask(t)" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </main>
</template>
