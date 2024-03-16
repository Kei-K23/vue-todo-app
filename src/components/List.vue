<script setup>
const props = defineProps({
  tasks: Array,
});
</script>
<template>
  <ul>
    <li v-for="task in tasks" :key="task.createdAt">
      <input
        type="checkbox"
        v-model="task.completed"
        class="checkbox checkbox-success"
      />
      <span :class="{ completed: task.completed }">
        {{ task.name }}
      </span>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  @apply line-through;
}
</style>
