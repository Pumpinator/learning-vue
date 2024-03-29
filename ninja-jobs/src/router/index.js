import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JobsView from "../views/jobs/JobsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("../views/jobs/JobsView.vue"),
  },
  {
    path: "/jobs/:id",
    name: "jobDetails",
    component: () => import("../views/jobs/JobDetailsView.vue"),
    props: true,
  },
  {
    path: "/alljobs",
    redirect: "/jobs",
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: ()=>import("../views/error/404View.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
