<template>
  <div>
    <!--<div class="freebirdFormviewerViewFormBanner freebirdHeaderMast"></div>-->

    <Card :width="'100%'" style="margin-top:-0px;">
      <div slot="top">
        <div class="freebirdFormviewerViewFormBanner freebirdHeaderMast"></div>
      </div>
      <div slot="title">
        <h2>Enforme o endereço {{id}}</h2>
      </div>
      <div slot="content">
        <div class="botaoSelecionado">
          <dx-button text="Selecionar" mode="outlined" type="success" @click="onSelected(item)"/>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import DxButton from "devextreme-vue/button";
import Card from "../components/Card";
import ArrayStore from "devextreme/data/array_store";

export default {
  name: "home",
  components: {
    DxButton,
    Card
  },
  props: ["id"],

  mounted() {
    window.w = this;
    this.$forceUpdate();
  },

  data() {
    return {};
  },
  methods: {
    onSelected(i) {
      console.log(i);
      this.$router.push("/pagamento");
    }
  }
};
</script>

<style scoped >
* {
  margin: 0;
  padding: 0;
}

.freebirdHeaderMast {
  background-image: url(https://lh6.googleusercontent.com/pL7Y5YwkYdMb0RHBlzjQpyy6Yh4Ym2jHZln0aCLUYnDR5a8lIl5j3Ai_IbUVkpVYI2KP_FwsMA=w1134);
  background-size: cover;
  background-position: center;
  color: rgba(0, 0, 0, 1);
}

.freebirdFormviewerViewFormBanner {
  height: 278px;
}

.ivc-list {
  display: flex;
}

.janela {
  display: flex;
  align-items: stretch;
  justify-content: start;
  border: solid 2px #ddd;
  background-color: rgb(233, 240, 243);
}

.imagem {
  padding: 8px;
}

.header {
  padding: 15px;
}

.obs {
  padding: 15px;
}

.valor {
  padding: 15px;
}

.botaoSelecionado {
  padding: 15px;
  align-self: end;
}
</style>
