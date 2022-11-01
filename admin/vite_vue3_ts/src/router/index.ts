import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { meat } from "./modules/meat";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/login/MyLogin.vue"), // 注意这里要带上 文件后缀.vue
  },
  ...meat,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
