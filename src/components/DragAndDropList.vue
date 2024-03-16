<script setup>
import { ref } from "vue";
import { cn } from "@/utils/cn";
import { checkAllCompleted, checkAllNotCompleted } from "@/utils/helper";
import draggable from "vuedraggable";

const isEdit = ref(0);
const newEditTask = ref("");

const emit = defineEmits([
  "onChangeAdd",
  "onChangeRemove",
  "onChangeForCompletedTask",
  "onChangeForTask",
  "deleteTask",
  "editTask",
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

function deleteTask(task) {
  emit("deleteTask", task);
}

function onUpdateSubmit() {
  console.log(newEditTask.value);
  if (!newEditTask.value) return;
  emit("editTask", isEdit.value, newEditTask.value);
  isEdit.value = 0;
  newEditTask.value = "";
}

function isEditingTask(task) {
  isEdit.value = task.createdAt;
  newEditTask.value = task.name;
}
</script>
<template>
  <h2 class="mt-4 text-center" v-if="tasks.length === 0">No task yet!</h2>
  <!-- TODO: make code more readable -->
  <template v-if="tasks.length > 0 || completedTasks.length > 0">
    <draggable
      class="mt-4 space-y-3"
      :list="tasks"
      group="task"
      itemKey="name"
      @change="onChangeForTask"
    >
      <template #item="{ element }">
        <div
          :class="
            cn(
              'group select-none flex items-center gap-3 justify-between px-4 py-3 text-black transition-all duration-150 rounded-lg cursor-pointer bg-emerald-600 hover:rounded-md',
              element.completed && 'bg-emerald-800 cursor-default'
            )
          "
        >
          <template v-if="isEdit === element.createdAt">
            <form class="w-full" @submit.prevent="onUpdateSubmit">
              <input
                type="text"
                v-model="newEditTask"
                class="w-full bg-transparent input border-emerald-800 focus:border-emerald-800 focus:ring-emerald-700"
              />
            </form>
          </template>
          <template v-else>
            <div class="flex items-center gap-3">
              <input
                @change="onChangeAdd(element)"
                type="checkbox"
                v-model="element.completed"
                class="checkbox bg-slate-300"
              />
              <span
                :class="
                  cn('text-lg font-bold', element.completed && 'line-through')
                "
              >
                {{ element.name }}
              </span>
            </div>
            <div
              class="items-center hidden gap-2 transition-all group-hover:flex"
            >
              <button @click="deleteTask(element)" class="btn btn-error btn-sm">
                <i class="text-white fa-solid fa-trash-can"></i>
              </button>
              <button
                @click="isEditingTask(element)"
                class="btn btn-info btn-sm"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </template>
        </div>
      </template>
    </draggable>
    <div class="mt-4">
      <h3>Completed</h3>
      <draggable
        class="mt-4 space-y-3"
        :list="completedTasks"
        group="task"
        itemKey="name"
        @change="onChangeForCompletedTask"
      >
        <template #item="{ element }">
          <div
            :class="
              cn(
                'group select-none flex items-center gap-3 justify-between px-4 py-3 text-black transition-all duration-150 rounded-lg cursor-pointer bg-emerald-600 hover:rounded-md',
                element.completed && 'bg-emerald-800 cursor-default'
              )
            "
          >
            <div class="flex items-center gap-3">
              <input
                @change="onChangeRemove(element)"
                type="checkbox"
                v-model="element.completed"
                class="checkbox bg-slate-300"
              />
              <span
                :class="
                  cn('text-lg font-bold', element.completed && 'line-through')
                "
              >
                {{ element.name }}
              </span>
            </div>

            <div class="hidden transition-all group-hover:block">
              <button @click="deleteTask(element)" class="btn btn-error btn-sm">
                <i class="text-white fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </template>
</template>
