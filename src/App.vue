<script setup>
import { ref } from "vue";
import Form from "./components/Form.vue";
import List from "./components/List.vue";

const tasks = ref([]);

function addTask(task) {
  tasks.value.push(task);
}
</script>

<template>
  <main>
    <h1 class="mt-4 text-2xl italic font-bold text-center text-emerald-600">
      Write your awesome ideas down
    </h1>
    <div class="w-full p-4 mx-auto mt-4 md:w-3/5 xl:w-1/2">
      <Form @add-task="(t) => addTask(t)" />
      <List :tasks="tasks" />
    </div>
  </main>
</template>
