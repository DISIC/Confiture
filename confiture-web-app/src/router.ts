import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SiteMapPage from "./pages/SiteMapPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import NewAuditPage from "./pages/NewAuditPage.vue";
import AuditPage from "./pages/AuditPage.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/plan-du-site",
      name: "site-map",
      component: SiteMapPage,
    },
    {
      path: "/audits/nouveau",
      name: "new-audit",
      component: NewAuditPage,
    },
    {
      path: "/audits/:uniqueId",
      name: "audit",
      component: AuditPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundPage,
    },
  ],
  history: createWebHistory(),
});

export default router;
