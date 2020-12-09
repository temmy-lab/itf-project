import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import DashboardHome from "../views/Dashboard/Dashboard.vue";
import TraineeList from "../views/Dashboard/TraineeList.vue";
import Registeration from "../views/Dashboard/Registeration.vue";
import Programs from "../views/Dashboard/Programs.vue"

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
    redirect: "/user/dashboard/home",
    component: Dashboard,
    children: [
      {
        path: "/user/dashboard/home",
        component:  DashboardHome
      },
      {
        path: "/user/dashboard/trainee-list",
        component: TraineeList
      },
      {
        path: "/user/dashboard/programs",
        component: Programs
      },
      {
        path: "/user/dashboard/registeration",
        component: Registeration
      },
      
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
