import TaskList from "./TaskList";

import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  // デコレーター：描画するコンポーネントを加工して表示する
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
};

export const Default = {
  args: {
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
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "タスク 6 （ピン止め）", state: "TASK_PINNED" },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
