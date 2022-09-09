import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";

Vue.use($);

Vue.use(Vuetify);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },


  {
    path: "/washers",
    name: "Washers",
    component: () => import("../views/Washers.vue")
  },
  {
    path: "/freezer",
    name: "Freezer",
    component: () => import("../views/Freezer.vue")
  },

  {
    path: "/ovens",
    name: "Ovens",
    component: () => import("../views/Ovens.vue")
  },

  {
    path: "/conditioners",
    name: "Conditioners",
    component: () => import("../views/Conditioners.vue")
  },

  {
    path: "/description",
    name: "Description",
    component: () => import("../views/Description.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
