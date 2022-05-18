import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GoBack from "../components/GoBack.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },  
  {
    path: "/questionOne",
    name: "questionOne",
    component: () =>
      import("../components/QuestionOne.vue"),
  },
  {
    path: "/questionTwo",
    name: "questionTwo",
    component: () => import("../components/QuestionTwo.vue"),
  },
  {
    path: "/questionThree",
    name: "questionThree",
    component: () => import("../components/QuestionThree.vue"),
  },
  {
    path: "/GoBack",
    name: "GoBack",
    component: GoBack,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
