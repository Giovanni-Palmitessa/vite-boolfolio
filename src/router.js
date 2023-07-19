import { createRouter, createWebHistory } from "vue-router";

// importare i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import PortfoliosIndex from "./pages/PortfoliosIndex.vue";
import PortfoliosShow from "./pages/PortfoliosShow.vue";
import AppAbout from "./pages/AppAbout.vue";
import App404 from "./pages/App404.vue";
import AppContact from "./pages/AppContact.vue";

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
      path: "/contact",
      name: "contact",
      component: AppContact,
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
    {
      path: "/:pathMatch(.*)*",
      name: "page404",
      component: App404,
    },
  ],
});

export { router };
