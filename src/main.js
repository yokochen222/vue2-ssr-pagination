import Vue from "vue";
import App from "./App.vue";
import Pagination from "./packages/index.js";
Vue.config.productionTip = false;

Vue.use(Pagination);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
