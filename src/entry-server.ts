import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createMemoryHistory } from "vue-router";
import Home from "./views/Home.vue";

export async function render() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/:catchAll(.*)",
        redirect: "/",
      },
    ],
  });

  const app = createSSRApp(App);
  app.use(createPinia());
  app.use(router);

  router.push("/");
  await router.isReady();

  const ctx = {};
  const html = await renderToString(app, ctx);
  return { html };
}
