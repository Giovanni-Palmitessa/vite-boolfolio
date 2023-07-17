import { createRouter, createWebHistory } from "vue-router";

// importare i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import PortfoliosIndex from "./pages/PortfoliosIndex.vue";
import PortfoliosShow from "./pages/PortfoliosShow.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/posts",
      name: "portfolios.index",
      component: PortfoliosIndex,
    },
    {
      path: "/posts/:id",
      name: "portfolios.show",
      component: PortfoliosShow,
    },
  ],
});

export { router };
