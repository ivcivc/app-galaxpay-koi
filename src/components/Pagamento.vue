<template>
  <div id="bloco2">
    <h2 class="content-block">Profile</h2>

    <div class="content-block dx-card responsive-paddings" id="bloco1">
      <div class="conteudo">
        <Painel id="bloco3">
          <div slot="title">
            <b>
              <h4>DADOS DO PAGAMENTO</h4>
            </b>
          </div>
          <div slot="content">
            <table>
              <tr>
                <td>
                  <b>Cliente:</b>
                </td>
                <td>Ivan Carlos Araujo de Oliveira</td>
              </tr>
              <tr>
                <td>
                  <b>Periodicidade:</b>
                </td>
                <td>Mensal</td>
              </tr>
            </table>
          </div>
        </Painel>
        <span>Ivan Oliveira</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DxButton from "devextreme-vue/button";
import ArrayStore from "devextreme/data/array_store";
import Painel from "../components/Painel";

export default {
  name: "home",
  components: {
    DxButton,
    Painel
  },

  computed: {
    pessoa() {
      return this.$store.getters["pessoa"];
    }
  },

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
      this.$router.push("/endereco");
    }
  }
};
</script>

<style>
.conteudo {
  padding: 20px;
  width: 60%;
}
</style>
