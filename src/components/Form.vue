<script setup>
import { ref } from "vue";

let id = 0;
const emit = defineEmits(["addTask"]);

const task = ref();

function onSubmit() {
  emit("addTask", {
    id: id++,
    name: task.value,
    completed: false,
    createdAt: new Date().getTime(),
  });

  task.value = "";
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      v-model="task"
      placeholder="What needs to be done?"
      class="input input-bordered w-full max-w-xs"
    />
  </form>
</template>
