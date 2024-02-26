import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("./components/Home.vue"),
  },
  {
    name: "Other",
    path: "/other",
    component: () => import("./components/Other.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
