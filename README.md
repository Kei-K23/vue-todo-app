# Vue Todo App with Drag and Drop Functionality

This is a simple Vue.js todo application with drag and drop functionality for task management. Users can add new tasks, mark tasks as completed, delete tasks, and edit task names. Tasks can also be reordered through drag and drop.

## Features

- Add new tasks with a name and mark them as completed or incomplete.
- Drag and drop tasks to reorder them.
- Mark tasks as completed or incomplete by checking/unchecking checkboxes.
- Delete tasks individually.
- Edit task names inline.

## Components

### 1. **Form**

The `Form` component allows users to add new tasks. It consists of a text input field where users can enter the task name.

### 2. **DragAndDropList**

The `DragAndDropList` component displays the list of tasks. It supports drag and drop functionality for reordering tasks. Each task is displayed with a checkbox to mark it as completed, the task name, and buttons to delete or edit the task.

## Usage

1. Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/vue-todo-app.git
```

2. Navigate to the project directory.

```bash
cd vue-todo-app
```

3. Install dependencies using npm or yarn.

```bash
npm install
```

4. Run the development server.

```bash
npm run dev
```

## How to Use

- `Add a Task`: Enter a task name in the input field in the Form component and press Enter or click the Add button.
- `Mark as Completed/Incomplete`: Check/uncheck the checkbox next to a task to mark it as completed or incomplete.
- `Reorder Tasks`: Drag and drop tasks to reorder them within the list.
- `Delete Task`: Click the trash can icon next to a task to delete it.
- `Edit Task`: Double-click on a task name to edit it inline. Press Enter or click outside the input field to save changes.

Feel free to customize and extend this Vue todo application according to your needs. If you have any questions or suggestions, please feel free to reach out. Happy coding! 🚀
