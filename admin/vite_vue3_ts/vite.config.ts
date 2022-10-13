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
  // server: {
  //   //主要是加上这段代码
  //   host: "127.0.0.1",
  //   port: 5173,
  //   proxy: {
  //     "/api": {
  //       target: "http://127.0.0.1:3000", //实际请求地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
