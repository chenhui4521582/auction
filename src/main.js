import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CommonComponents from '@/components'
import lazyLoad from "vue-lazyload";
import fastclick from "fastclick";
import "./utils/rem";
Vue.config.productionTip = false;

fastclick.attach(document.body);

Vue.use(lazyLoad, {
  loading: require("@/assets/img/default.png"),
  filter: {
    webp (listener, options) {
      let url = listener.src
      if (url && !url.includes('://') && !url.includes('data:image')) {
        listener.src = 'https://file.beeplaying.com' + url
      }
    }
  }
});

Vue.use(CommonComponents)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
