import { createRouter, createWebHashHistory } from "vue-router";
import MyView from "@/views/myView.vue";
import NavBar from "@/components/navBar.vue";
import AboutPage from "@/views/aboutPage.vue";
import EmployesT from "@/components/EmployesT.vue";

const routes = [
  {
    path: "/",
    name: "myView",
    component: MyView,
  },
  {
    path: "/navbar",
    name: "navbar",
    component: NavBar,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/emps",
    name: "emps",
    component: EmployesT,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
