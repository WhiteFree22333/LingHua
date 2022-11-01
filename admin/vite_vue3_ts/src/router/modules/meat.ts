import type { RouteRecordRaw } from "vue-router";

export const meat: Array<RouteRecordRaw> = [
  // 申请
  {
    path: "/meat",
    name: "meat",
    component: () => import("../../views/meat/inDex.vue"),
    children: [],
  },
];
