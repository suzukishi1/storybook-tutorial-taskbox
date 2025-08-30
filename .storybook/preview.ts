import '../src/index.css'; // storybook でのコンポーネントの表示に適用するcss

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    // 指定の Props を自動的に Storybook の「Actions」タブにイベント表示する設定。
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
