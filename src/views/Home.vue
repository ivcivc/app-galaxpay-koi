<template>
  <div>
    <Card :width="'100%'" style="margin-top:-0px;">
      <div slot="top">
        <div class="freebirdFormviewerViewFormBanner freebirdHeaderMast"></div>
      </div>
      <div slot="title">
        <h2>Qual o treinamento vai fazer?</h2>
      </div>
      <div slot="content">
        <template v-for="item, index in eventos">
          <div class="janela">
            <div class="imagem" v-show="item.siteLink != ''">
              <img :src="item.siteLink" height="220" width="220" />
            </div>
            <div class="ivc-detalhes">
              <div class="header">
                <div>
                  <h3>{{ item.siteEvento }}</h3>
                </div>
              </div>

              <div class style="margin-top:-15px;">
                <div class="obs" :id="`a${index}`">{{ strip(item.siteDetalhes, index )}}</div>
              </div>

              <div class style="margin-top:-10px;">
                <div class="valor">
                  <b>Investimento:</b>
                  {{ item.valorBase | currency }} {{item.siteParcelas | parcelas}}
                </div>
              </div>

              <div class="botaoSelecionado" style="margin-top:-10px;">
                <dx-button
                  text="Selecionar"
                  mode="outlined"
                  type="success"
                  @click="onSelected(item)"
                />
              </div>
            </div>
          </div>
        </template>

        <template v-if="_exibirMensagem()">
          <br />

          <div class="row center-xs">
            <div class="col-xs-6">
              <div class="box">
                <span>Nenhum treinamento disponível no momento.</span>
                <br />
                <dx-button
                  text="Voltar"
                  @click="voltar"
                  style="margin-top:20px; margin-bottom:20px;"
                />
              </div>
            </div>
          </div>
        </template>
      </div>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import DxButton from "devextreme-vue/button";
import Card from "../components/Card";
import ArrayStore from "devextreme/data/array_store";

import service from "../components/data";
import { setTimeout } from "timers";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 4
});

export default {
  name: "home",
  components: {
    DxButton,
    Card
  },

  beforeRouteEnter(to, from, next) {
    //loading();
    service
      .getEventosSite()
      .then(r => {
        next(vm => {
          vm.$store.dispatch("setEventos", r);
          console.log("before forçar atualizaçao");
          vm.forcarAtualizacao = 1;
          return true;
        });
        // loading();
      })
      .catch(error => {
        //loading();
        next(false);
      });
  },

  mounted() {
    window.w = this;
    //this.$forceUpdate();
    //this.$store.dispatch("getEventos");
  },

  filters: {
    currency(data) {
      let c = currencyFormatter.format(data);
      if (!c.includes(",")) c = c + ",00";
      return c;
    },
    parcelas(data) {
      if (data < 1) return "";
      if (data === 1) return " (à vista)";
      return ` (${data} x)`;
    }
  },

  computed: {
    eventos() {
      return this.$store.getters["eventos"];
    }
  },

  watch: {
    forcarAtualizacao: function(e) {
      if (!this.lodash.isArray(this.eventos)) {
        return;
      }
      setTimeout(() => {
        if (this.eventos.length > 0) this.$forceUpdate();
      }, 600);
    }
  },

  data() {
    return {
      evento: null,
      forcarAtualizacao: 0
    };
  },

  methods: {
    voltar() {
      window.location.href = "//institutokoi.com.br";
    },
    _exibirMensagem() {
      if (!this.lodash.isArray(this.eventos)) {
        return false;
      }
      return this.eventos.length === 0;
    },

    strip(html, index) {
      console.log(html);
      let d = document.getElementById("a" + index);
      if (d) {
        d.innerHTML = html;
      }
    },

    onSelected(i) {
      this.evento = i;
      const id = this.evento.id;
      if (id) {
        console.log("aqui");
        this.$store.dispatch("setEvento", this.evento);
        this.$router.push({ path: "/cpf", params: { id } });
      }
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
