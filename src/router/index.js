/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-03 15:53:33
 * @FilePath: /vue-jd-h5/src/router/index.js
 */
import { createRouter, createWebHistory } from "vue-router";

const indexRouter = {
  path: "/",
  component: () => import("../views/index.vue"),
  redirect: "/index",
  children: [],
};

const routes = [
  indexRouter,
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/index.vue"),
  },
  {
    path: "/apiSelect",

    name: "ApiSelect",
    component: () => import("../views/apiSelect/index.vue"),
  },
  {
    path: "/ipSearch",
    name: "ipSearch",
    component: () => import("/src/views/business/ipSearch.vue"),
  },
    {
    path: "/historyToday",
    name: "historyToday",
    component: () => import("/src/views/business/historyToday.vue"),
  },
  // {
  //   path: "/phoneSearch",
  //   name: "phoneSearch",
  //   component: () => import("/src/views/business/phoneSearch.vue"),
  // },
  // {
  //   path: "/phoneSearch",
  //   name: "phoneSearch",
  //   component: () => import("/src/views/business/phoneSearch.vue"),
  // },
];

// const routerContext = require.context('./modules', true, /\.js$/)
// routerContext.keys().forEach(route => {
//   const routerModule = routerContext(route)
//   indexRouter.children = [...indexRouter.children, ...(routerModule.default || routerModule)]
// })

export default createRouter({
  history: createWebHistory(),
  routes,
});
