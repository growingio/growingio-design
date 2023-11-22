import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/*/components/**/*.mdx",
    "../../../packages/*/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-toolbars"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
