// import './styles/index.css' // 引入自定义样式:不生效,需要在组件下方引入

import DefaultTheme from "vitepress/theme";
import "./styles/index.css";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
  },
};
