import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/questionOne",
    name: "questionOne",
    component: () => import("../components/QuestionOne.vue"),
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
    path: "/questionFour",
    name: "questionFour",
    component: () => import("../components/QuestionFour.vue"),
  },
  {
    path: "/questionFive",
    name: "questionFive",
    component: () => import("../components/QuestionFive.vue"),
  },
  {
    path: "/questionSix",
    name: "questionSix",
    component: () => import("../components/QuestionSix.vue"),
  },
  {
    path: "/questionSevenA",
    name: "questionSevenA",
    component: () => import("../components/QuestionSevenA.vue"),
  },
  {
    path: "/questionSevenB",
    name: "questionSevenB",
    component: () => import("../components/QuestionSevenB.vue"),
  },
  {
    path: "/questionEightA",
    name: "questionEightA",
    component: () => import("../components/QuestionEightA.vue"),
  },
  {
    path: "/questionEightB",
    name: "questionEightB",
    component: () => import("../components/QuestionEightB.vue"),
  },
  {
    path: "/questionNine",
    name: "questionNine",
    component: () => import("../components/QuestionNine.vue"),
  },
  {
    path: "/end",
    name: "end",
    component: () => import("../components/EndPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
