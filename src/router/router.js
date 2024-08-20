import { createRouter, createWebHistory } from "vue-router";
import AppVue from "../App.vue";
import AppProfile from "@/components/AppProfile.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppVue,
    },
    {
      path: "/profile",
      name: "profile",
      component: AppProfile,
    },
  ],
});

export default router;
