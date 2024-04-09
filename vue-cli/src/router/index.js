import { createRouter, createWebHashHistory } from "vue-router";

import CardsPage from "@/views/cardsPage.vue";

const routes = [
  {
    path: "/cards",
    name: "cards",
    component: CardsPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
