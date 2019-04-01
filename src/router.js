import Vue from "vue";
import Router from "vue-router";
import Moviepage from "./views/Moviepage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "moviepage",
      component: Moviepage
    }
  ]
});
