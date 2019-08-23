import Vue from "vue";
import store from "./store";

export const userKey = "__ivc_capa_user";
//export const baseApiUrl = "http://localhost:3000/api/v1";
export const baseApiUrl = process.env.VUE_APP_SERVER_URL;
//export const baseApiUrl = "http://ivcinformatica-com-br.umbler.net";
export const baseUrl = window.location.origin;

export function showError(e) {
  if (e && e.response && e.response.data) {
    let message = e.response.data;
    if (_.isObject(message)) {
      message = message.message;
    }
    Vue.$awn.success(message);
  } else if (typeof e === "string") {
    Vue.$awn.success(e);
  } else {
    Vue.toasted.global.defaultError();
  }
}

export function loading() {
  store.dispatch("setLoadingVisible");
}

export default { baseApiUrl, showError, userKey, baseUrl };
