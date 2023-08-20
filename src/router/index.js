import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/TheHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/basket",
      name: "basket",
      component: () => import("@/pages/TheBasket.vue"),
    },
  ],
});

export default router;
