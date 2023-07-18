import { createRouter, createWebHistory } from "vue-router";

// importare i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import PortfoliosIndex from "./pages/PortfoliosIndex.vue";
import PortfoliosShow from "./pages/PortfoliosShow.vue";
import AppAbout from "./pages/AppAbout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/portfolios",
      name: "portfolios.index",
      component: PortfoliosIndex,
    },
    {
      path: "/portfolios/:id",
      name: "portfolios.show",
      component: PortfoliosShow,
    },
  ],
});

export { router };
