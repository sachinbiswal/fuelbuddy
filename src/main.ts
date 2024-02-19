import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./pages/SignUp.vue";
import Login from "./pages/Login.vue";
import Dashboard from "./pages/Dashboard.vue";
import "./index.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Login,
    },
    { path: "/sign-up", component: SignUp },
    { path: "/dashboard", component: Dashboard },
  ],
});

createApp(App).use(router).use(pinia).mount("#app");
