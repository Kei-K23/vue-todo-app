<script setup>
import { ref } from "vue";

const emit = defineEmits(["addTask"]);

const task = ref();

function onSubmit() {
  if (!task.value) return;
  emit("addTask", {
    name: task.value,
    completed: false,
    createdAt: new Date().getTime(),
  });

  task.value = "";
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex items-center justify-center">
    <input
      type="text"
      v-model="task"
      placeholder="What needs to be done?"
      class="w-full input input-bordered"
    />
  </form>
</template>
