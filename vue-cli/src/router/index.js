import { createRouter, createWebHashHistory } from "vue-router";
import AboutPage from "@/views/aboutPage.vue";

import LifeCycle from "@/components/LifeCycle.vue";
import MyView from "@/views/myView.vue";

const routes = [
  {
    path: "/",
    name: "myView",
    component: MyView,
  },

  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },

  {
    path: "/player",
    name: "player",
    component: LifeCycle,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
