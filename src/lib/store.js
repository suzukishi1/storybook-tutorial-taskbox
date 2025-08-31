import { configureStore, createSlice } from "@reduxjs/toolkit";

// initialState
const defaultTasks = [
  { id: "1", title: "サンプルタスク 1", state: "TASK_INBOX" },
  { id: "2", title: "サンプルタスク 2", state: "TASK_INBOX" },
  { id: "3", title: "サンプルタスク 3", state: "TASK_INBOX" },
  { id: "4", title: "サンプルタスク 4", state: "TASK_INBOX" },
];

const TaskBoxData = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};

// store と reducer の定義
const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;

// store の作成
const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export default store;
