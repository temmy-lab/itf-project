import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Registrationform from "../views/RegistrationForm.vue";

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
    path: "/registration-form",
    name: "Registration form",
    component: Registrationform
  }
];

const router = new VueRouter({
  routes
});

export default router;
