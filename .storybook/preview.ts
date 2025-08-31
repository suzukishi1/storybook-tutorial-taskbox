import '../src/index.css'; // storybook でのコンポーネントの表示に適用するcss

import type { Preview } from "@storybook/react";

import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

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
  loaders: [mswLoader],
};

export default preview;
