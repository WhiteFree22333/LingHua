import type { RouteRecordRaw } from "vue-router";

export const meat: Array<RouteRecordRaw> = [
  // 申请
  {
    path: "/meat",
    name: "meat",
    component: () => import("../../views/meat/inDex.vue"),
    children: [],
  },
  //已经购买的肉肉列表
  {
    path: "/meatList",
    name: "meatList",
    component: () => import("../../views/meat/meatList.vue"),
    children: [],
  },
];
