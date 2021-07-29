import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact";
import About from "../views/About";
import Recipes from "../views/Recipe";
import CreateRecipes from "../components/Recipes/CreateRecipes";
import DetailRecipes from "../components/Recipes/DetailRecipes";
import UpdateRecipes from "../components/Recipes/UpdateRecipes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/create/recipes",
    name: "CreateRecipes",
    component: CreateRecipes,
  },
  {
    path: "/recipes/detail",
    name: "DetailRecipes",
    component: DetailRecipes,
  },
  {
    path: "/recipes/update",
    name: "UpdateRecipes",
    component: UpdateRecipes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
