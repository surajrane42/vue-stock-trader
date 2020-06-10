import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { routes } from "./routes.js";
import store from "./store/store.js";
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-stock-trader-8bde2.firebaseio.com/";

const router = new VueRouter({
  mode: "history",
  routes: routes
});

Vue.filter("currency", (value) => {
  return "INR " + value.toLocaleString();
});

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: (h) => h(App)
});
