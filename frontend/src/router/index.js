import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import Programs from "../views/Programs.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/user/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/programs",
    name: "Programs",
    component: Programs,
  },
];

const router = new VueRouter({
  routes
});

export default router;
