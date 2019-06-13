import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./config/axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "devextreme/dist/css/dx.carmine.css";
import "devextreme/dist/css/dx.common.css";
import "./assets/css/flexboxgrid.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
