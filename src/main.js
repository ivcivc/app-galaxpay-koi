import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./config/axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faShieldAlt,
  faUserSecret
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee);
library.add(faShieldAlt);
library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "devextreme/dist/css/dx.carmine.css";
import "devextreme/dist/css/dx.common.css";
import "./assets/css/flexboxgrid.min.css";

import VueLodash from "vue-lodash";
Vue.use(VueLodash, { name: "lodash" });

import "v-slim-dialog/dist/v-slim-dialog.css";
import SlimDialog from "v-slim-dialog";

Vue.use(SlimDialog);

Vue.config.productionTip = false;

console.log("variavel de ambiente: ", process.env.VUE_APP_SERVER_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
