<script setup>
import { cn } from "@/utils/cn";
import { checkAllCompleted, checkAllNotCompleted } from "@/utils/helper";

import draggable from "vuedraggable";

const emit = defineEmits([
  "onChangeAdd",
  "onChangeRemove",
  "onChangeForCompletedTask",
  "onChangeForTask",
]);

const props = defineProps({
  tasks: Array,
  completedTasks: Array,
});

function onChangeForCompletedTask() {
  const allCompleted = checkAllCompleted(props.completedTasks);
  emit("onChangeForCompletedTask", allCompleted);
}

function onChangeForTask() {
  const allNotCompleted = checkAllNotCompleted(props.tasks);
  emit("onChangeForTask", allNotCompleted);
}

function onChangeAdd(task) {
  if (task.completed) {
    emit("onChangeAdd", task);
  }
}

function onChangeRemove(task) {
  if (!task.completed) {
    emit("onChangeRemove", task);
  }
}
</script>

<template>
  <draggable
    class="mt-4 space-y-3"
    :list="tasks"
    group="task"
    itemKey="name"
    @change="onChangeForTask"
  >
    <template #item="{ element, index }">
      <div
        :class="
          cn(
            'select-none flex items-center gap-3 px-4 py-2 text-black transition-all duration-150 rounded-lg cursor-pointer bg-emerald-600 hover:rounded-md',
            element.completed && 'bg-emerald-800 cursor-default'
          )
        "
      >
        <input
          @change="onChangeAdd(element)"
          type="checkbox"
          v-model="element.completed"
          class="checkbox bg-slate-300"
        />
        <span
          :class="cn('text-lg font-bold', element.completed && 'line-through')"
        >
          {{ element.name }}
        </span>
      </div>
    </template>
  </draggable>
  <draggable
    class="mt-4 space-y-3"
    :list="completedTasks"
    group="task"
    itemKey="name"
    @change="onChangeForCompletedTask"
  >
    <template #item="{ element, index }">
      <div
        :class="
          cn(
            'select-none flex items-center gap-3 px-4 py-2 text-black transition-all duration-150 rounded-lg cursor-pointer bg-emerald-600 hover:rounded-md',
            element.completed && 'bg-emerald-800 cursor-default'
          )
        "
      >
        <input
          @change="onChangeRemove(element)"
          type="checkbox"
          v-model="element.completed"
          class="checkbox bg-slate-300"
        />
        <span
          :class="cn('text-lg font-bold', element.completed && 'line-through')"
        >
          {{ element.name }}
        </span>
      </div>
    </template>
  </draggable>
</template>
