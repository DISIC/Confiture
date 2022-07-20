import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import NewAuditStepOnePage from "./pages/NewAuditStepOnePage.vue";
import NewAuditStepTwoPage from "./pages/NewAuditStepTwoPage.vue";
import AuditPage from "./pages/AuditPage.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/audits/nouveau/1",
      name: "new-audit-step-one",
      component: NewAuditStepOnePage,
    },
    {
      path: "/audits/nouveau/2",
      name: "new-audit-step-two",
      component: NewAuditStepTwoPage,
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
