import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // デフォルトでは src 配下の .mdx, .stories. ファイルが対象
  // src/stories 配下にはサンプルのストーリーファイルがある
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // 次の通りにすれば、ディレクトリを特定できる
  // stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // チュートリアルには以下のコードがあるがデフォルトには無い設定。無くても Docs は表示されている。
  // docs: {
  //   autodocs: 'tag',
  // },
};
export default config;
