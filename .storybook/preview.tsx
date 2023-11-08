import type { Preview } from "@storybook/react";
import * as React from "react";
import { DocsContainer } from "@storybook/blocks";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "@arco-design/web-react";
import zhCNComponentLocale from "@arco-design/web-react/es/locale/zh-CN";
import enUSComponentLocale from "@arco-design/web-react/es/locale/en-US";
import zhCNDocsLocale from "./locales/zh-CN.json";
import enUSDocsLocale from "./locales/en-US.json";

import "@arco-themes/react-growingio/css/arco.css";

const getComponentLocale = (locale: string) => {
  switch (locale) {
    case "en-US":
      return enUSComponentLocale;
    case "zh-CN":
    default:
      return zhCNComponentLocale;
  }
};

const withConfigProvider = (Story, context) => {
  const {
    globals: { locale, direction },
  } = context;
  return (
    <ConfigProvider
      locale={getComponentLocale(locale)}
      rtl={direction === "rtl"}
    >
      <Story />
    </ConfigProvider>
  );
};

const getDocsLocale = (locale: string) => {
  switch (locale) {
    case "en-US":
      return enUSDocsLocale;
    case "zh-CN":
    default:
      return zhCNDocsLocale;
  }
};
const customDocsContainer = ({ children, context, ...restProps }) => {
  const {
    store: {
      globals: {
        globals: { locale },
      },
    },
  } = context;

  return (
    <DocsContainer context={context} {...restProps}>
      <IntlProvider locale={locale} messages={getDocsLocale(locale)}>
        {children}
      </IntlProvider>
    </DocsContainer>
  );
};

const preview: Preview = {
  decorators: [withConfigProvider],
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locales",
      defaultValue: "zh-CN",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en-US", right: "🇺🇸", title: "English (United States)" },
          { value: "zh-CN", right: "🇨🇳", title: "简体中文" },
        ],
      },
    },
    direction: {
      name: "Direction",
      description: "Set the direction of layout",
      defaultValue: "ltr",
      toolbar: {
        icon: "paragraph",
        items: [
          { value: "ltr", right: "LTR", title: "Left To Right" },
          { value: "rtl", right: "RTL", title: "Right To Left" },
        ],
      },
    },
    // theme: {
    //   description: "Global theme for components",
    //   defaultValue: "light",
    //   toolbar: {
    //     title: "Theme",
    //     icon: "circlehollow",
    //     items: [
    //       { value: "light", icon: "sun", title: "Light" },
    //       { value: "dark", icon: "moon", title: "Dark" },
    //       { value: "system", icon: "browser", title: "System" },
    //     ],
    //     dynamicTitle: true,
    //   },
    // },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: customDocsContainer,
      toc: true,
    },
  },
};

export default preview;
