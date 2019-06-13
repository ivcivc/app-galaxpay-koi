<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link active-class="classe" exact tag='li'> |
      <router-link to="/about">About</router-link>
    </div>-->

    <div class="content">
      <dx-scroll-view>
        <router-view/>
      </dx-scroll-view>
    </div>
  </div>
</template>

<script>
import { locale, loadMessages, formatMessage } from "devextreme/localization";

import ptMessages from "devextreme/localization/messages/pt.json";
import config from "devextreme/core/config";
config({
  defaultCurrency: "BRL",
  decimalSeparator: ",",
  serverDecimalSeparator: ".",
  thousandsSeparator: "."
});

import "devextreme-intl";

export default {
  created() {
    this.initMessages();
    locale("pt");
  },
  methods: {
    initMessages() {
      console.log("Iniciando loadMessages(ptMessages)");
      loadMessages(ptMessages);
    }
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0px;
  /*background: whitesmoke;*/
}

.app {
  /*@import "./themes/generated/variables.base.scss";
  background-color: darken($base-bg, 5);*/
  display: flex;
  height: 100%;
  width: 100%;
}

#app {
  height: calc(100% - 40px);
}

/*body {
  background-color: rgb(233, 240, 243);
}*/

/*div {
  border: solid 0px red;
  background: auto;
}*/
</style>
