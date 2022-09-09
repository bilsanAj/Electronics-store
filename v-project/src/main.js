import Vue from "vue";
import vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
require('./StyleSheet/Home.css');
require('./StyleSheet/Condition.css');
require('./StyleSheet/Description.css');
require('./StyleSheet/Freezer.css');
require('./StyleSheet/Washer.css');
require('./StyleSheet/Oven.css');
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
