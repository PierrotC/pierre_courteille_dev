import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // { path: "/intro", name: "intro", component: () => import(/* webpackChunkName: "about" */ "../views/intro.vue") },
  // { path: "/formation", name: "formation", component: () => import(/* webpackChunkName: "about" */ "../views/formation.vue") },
  // { path: "/experience", name: "experience", component: () => import(/* webpackChunkName: "about" */ "../views/experience.vue") },
  // { path: "/skills", name: "skills", component: () => import(/* webpackChunkName: "about" */ "../views/skills.vue") },
  // { path: "/hobbies", name: "hobbies", component: () => import(/* webpackChunkName: "about" */ "../views/hobbies.vue") },
  // { path: "/news", name: "news", component: () => import(/* webpackChunkName: "about" */ "../views/news.vue") },
  // { path: "/contact", name: "contact", component: () => import(/* webpackChunkName: "about" */ "../views/contact.vue") },
  // { path: "/cv", name: "cv", component: () => import(/* webpackChunkName: "about" */ "../views/cv.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
