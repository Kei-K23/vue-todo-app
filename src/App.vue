<script setup>
import { ref } from "vue";
import Form from "./components/Form.vue";
import List from "./components/List.vue";
import DragAndDropList from "./components/DragAndDropList.vue";
const tasks = ref([]);
const completedTasks = ref([]);

// add new task  to the list and sort by creation time
function addTask(task) {
  tasks.value.push(task);
  tasks.value = tasks.value.filter((t) => !t.completed);
}

function addCompletedTasks(ct) {
  completedTasks.value.push(ct);
  tasks.value = tasks.value.filter((t) => t.createdAt !== ct.createdAt);
}

function removeCompletedTasks(rt) {
  completedTasks.value = completedTasks.value.filter(
    (t) => t.createdAt !== rt.createdAt
  );
  tasks.value.push(rt);
}

function onChangeForCompletedTask(allCompleted) {
  if (!allCompleted) {
    completedTasks.value = completedTasks.value.map((task) => ({
      ...task,
      completed: true,
    }));
  }
}

function onChangeForTask(allNotCompleted) {
  if (!allNotCompleted) {
    tasks.value = tasks.value.map((task) => ({
      ...task,
      completed: false,
    }));
  }
}
</script>

<template>
  <main>
    <h1 class="mt-4 text-2xl italic font-bold text-center text-emerald-600">
      Write your awesome ideas down
    </h1>
    <div class="w-full p-4 mx-auto mt-4 md:w-3/5 xl:w-1/2">
      <Form @add-task="(t) => addTask(t)" />
      <DragAndDropList
        :tasks
        :completed-tasks="completedTasks"
        @on-change-add="(t) => addCompletedTasks(t)"
        @on-change-remove="(t) => removeCompletedTasks(t)"
        @on-change-for-completed-task="
          (allCompleted) => onChangeForCompletedTask(allCompleted)
        "
        @on-change-for-task="
          (allNotCompleted) => onChangeForTask(allNotCompleted)
        "
      />
    </div>
  </main>
</template>
