import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; // 引入方法
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // 配置 @ 指代 src
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
  //  `核心代码 `
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/style/main.less";
        `,
      },
    },
  },
});
