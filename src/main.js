import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import lazyLoad from "vue-lazyload";
import fastclick from "fastclick";
import "./utils/rem";
Vue.config.productionTip = false;

fastclick.attach(document.body);

Vue.use(lazyLoad, {
  loading: require("@/assets/img/default.png")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
