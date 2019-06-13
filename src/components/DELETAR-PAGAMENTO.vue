<template>
  <div>
    <!--<div class="freebirdFormviewerViewFormBanner freebirdHeaderMast"></div>-->

    <div class="master">
      <header></header>
      <main>
        <div class="conteudo-master">
          <div class="row top-xs">
            <div class="col-xs-6">
              <div class="box">
                <Painel>
                  <div slot="title">
                    <span>DADOS DO PAGAMENTO 1</span>
                    <!--<hr style="margin-top:7px;">-->
                  </div>
                  <div slot="content">
                    Conteudo
                    <p>Minha pagina é toda sua</p>
                  </div>
                  <div slot="footer">
                    <dx-button text="voltar"/>
                    <dx-button text="Confirmar"/>
                  </div>
                </Painel>
              </div>
            </div>

            <div class="col-xs-6">
              <div class="box">
                <div style="border: 1px solid #ddd;width:'100%'">
                  <span>Coluna 2</span>
                  <p>Estou no paragrafo 1 da linha numero 2 e estou aqui tambem.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs">
              <div class="box">
                <Painel>
                  <div slot="title">
                    <span>DADOS DO PAGAMENTO 3</span>
                    <!--<hr style="margin-top:7px;">-->
                  </div>
                  <div slot="content">
                    Conteudo
                    <p>Minha pagina é toda sua</p>
                  </div>
                  <div slot="footer">
                    <dx-button text="voltar"/>
                    <dx-button text="Confirmar"/>
                  </div>
                </Painel>
              </div>
            </div>
            <div class="col-xs">
              <div class="box">
                <Painel>
                  <div slot="title">
                    <span>DADOS DO PAGAMENTO 4</span>
                    <!--<hr style="margin-top:7px;">-->
                  </div>
                  <div slot="content">
                    Conteudo
                    <p>Minha pagina é toda sua</p>
                  </div>
                  <div slot="footer">
                    <dx-button text="voltar"/>
                    <dx-button text="Confirmar"/>
                  </div>
                </Painel>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
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

<style scoped >
* {
  margin: 0;
  padding: 0;
}

header {
  grid-area: cabecalho;
}

main {
  grid-area: conteudo;
}

footer {
  grid-area: rodape;
}

.master {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 80px;
  grid-template-areas: "cabecalho" "conteudo" "rodape";
}

.conteudo-master {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  min-height: 100%;
}
</style>
