import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./config/axios";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";
import "./assets/css/flexboxgrid.min.css";

//import "./assets/js/vue-form-wizard.min.css";
//import "./assets/js/vue-form-wizard.js";

//import "./assets/icon/themify-icons.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

//onsole.log(VueFormWizard);
//Vue.use(VueFormWizard);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
