import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import ContactPage from "./pages/contact-page.vue";
import Union from "./pages/union.vue";
import Group from "./pages/group.vue";
import TenantkeyLandingPage from "./pages/tenantkey-landing-page.vue";
import MobileView from "./pages/mobile-view.vue";
import ProductMenu from "./components/product-menu.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/union",
    name: "Union",
    component: Union,
  },
  {
    path: "/group",
    name: "Group",
    component: Group,
  },
  {
    path: "/tenantkey-landing-page",
    name: "TenantkeyLandingPage",
    component: TenantkeyLandingPage,
  },
  {
    path: "/mobile-view",
    name: "MobileView",
    component: MobileView,
  },
  {
    path: "/product-menu",
    name: "ProductMenu",
    component: ProductMenu,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "HK-Website-Contact-Page-(Copy)";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

const vuetify = createVuetify({ components, directives });

createApp(App).use(router).use(vuetify).mount("#app");

export default router;
