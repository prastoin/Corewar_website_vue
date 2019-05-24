import Vue from "vue";
import Router from "vue-router";
import Corewar from "./views/CorewarMenu.vue";
import Hello from "./components/HelloWorld.vue";
import Cards from "./views/cards.vue";
import Bubble from "./components/bubble.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/corewar",
      name: "Corewar_menu",
      component: Corewar
    },
    {
      path: "/hello",
      name: "Hello",
      component: Hello
    },
    {
      path: "/card",
      name: "Card",
      component: Cards
    },
    {
      path: "/bubble",
      name: "bubble",
      component: Bubble
    }
    /*{
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( webpackChunkName: "about"  "./views/About.vue")
    }*/
  ]
});
