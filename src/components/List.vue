<script setup>
import { cn } from "@/utils/cn";

const props = defineProps({
  tasks: Array,
});
</script>
<template>
  <ul class="mt-4 space-y-3">
    <div
      v-for="task in tasks"
      :key="task.createdAt"
      :class="
        cn(
          'select-none flex items-center gap-3 px-4 py-2 text-black transition-all duration-150 rounded-lg cursor-pointer bg-emerald-600 hover:rounded-md',
          task.completed && 'bg-emerald-800 cursor-default'
        )
      "
    >
      <input
        type="checkbox"
        v-model="task.completed"
        class="checkbox bg-slate-300"
      />
      <span :class="cn('text-lg font-bold', task.completed && 'line-through')">
        {{ task.name }}
      </span>
    </div>
  </ul>
</template>

<style scoped></style>
