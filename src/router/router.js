import { createRouter, createWebHistory } from "vue-router";
import AppVue from "../App.vue";
import AppVoting from "@/components/AppVoting.vue";
import AppProfile from "@/components/AppProfile.vue";
import AppObject from "@/components/AppObject.vue";
import InsideVoting from "@/components/InsideVoting.vue";
import AppOffer from "@/components/AppOffer.vue";
import AppInfo from "@/components/AppInfo.vue";
import InsideInfo from "@/components/InsideInfo.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppVue,
    },
    {
      path: "/voting",
      name: "voting",
      component: AppVoting,
    },
    {
      path: "/profile",
      name: "profile",
      component: AppProfile,
    },
    {
      path: "/object",
      name: "object",
      component: AppObject,
    },
    {
      path: "/vote",
      name: "vote",
      component: InsideVoting,
    },
    {
      path: "/offer",
      name: "offer",
      component: AppOffer,
    },
    {
      path: "/info",
      name: "info",
      component: AppInfo,
    },
    {
      path: "/info_inside",
      name: "info_inside",
      component: InsideInfo,
    },
  ],
});

export default router;
