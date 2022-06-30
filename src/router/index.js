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
    path: "/questionSeven",
    name: "questionSeven",
    component: () => import("../components/QuestionSeven.vue"),
  },
  {
    path: "/questionEight",
    name: "questionEight",
    component: () => import("../components/QuestionEight.vue"),
  },
  {
    path: "/questionNine",
    name: "questionNine",
    component: () => import("../components/QuestionNine.vue"),
  },
  {
    path: "/questionTen",
    name: "questionTen",
    component: () => import("../components/QuestionTen.vue"),
  },
  {
    path: "/questionEleven",
    name: "questionEleven",
    component: () => import("../components/QuestionEleven.vue"),
  },
  {
    path: "/questionTwelve",
    name: "questionTwelve",
    component: () => import("../components/QuestionTwelve.vue"),
  },
  {
    path: "/questionThirteen",
    name: "questionThirteen",
    component: () => import("../components/QuestionThirteen.vue"),
  },
  {
    path: "/questionFourteen",
    name: "questionFourteen",
    component: () => import("../components/QuestionFourteen.vue"),
  },
  {
    path: "/questionFifteen",
    name: "questionFifteen",
    component: () => import("../components/QuestionFifteen.vue"),
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
