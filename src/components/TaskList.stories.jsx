import TaskList from "./TaskList";

import * as TaskStories from "./Task.stories";

import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { updateTaskState } from "../lib/store";

export default {
  component: TaskList,
  title: "TaskList",
  // デコレーター：描画するコンポーネントを加工して表示する
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
  // このあと定義するMockedStateをストーリーから除外する
  excludeStories: /.*MockedState$/,
};

export const MockedState = {
  tasks: [
    // Task の stories で定義された task 要素を利用する
    { ...TaskStories.Default.args.task, id: "1", title: "タスク 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "タスク 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "タスク 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "タスク 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "タスク 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "タスク 6" },
    { ...TaskStories.Default.args.task, id: "7", title: "タスク 7" },
  ],
  status: "idle",
  error: null,
};

// Storybook でコンポーネントを表示するための Provider の定義
// children でコンポーネントを指定可能とし、各ストーリーで利用する
// ストーリーごとにデータを変えるため initialState を可変にする
// store, reducer は store.js と同じ
const Mockstore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: "taskbox",
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export const Default = {
  decorators: [
    (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
  ],
};

export const WithPinnedTasks = {
  decorators: [
    (story) => {
      const pinnedtasks = [
        ...MockedState.tasks.slice(0, 5),
        { id: "6", title: "タスク 6 （ピン止め）", state: "TASK_PINNED" },
      ];

      return (
        <Mockstore
          taskboxState={{
            ...MockedState,
            tasks: pinnedtasks,
          }}
        >
          {story()}
        </Mockstore>
      );
    },
  ],
};

export const Loading = {
  decorators: [
    (story) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          status: "loading",
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};

export const Empty = {
  decorators: [
    (story) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          tasks: [],
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};
