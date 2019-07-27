<template>
  <div>
    <!--<div class="footer">
      <div>
        <div class="row">
          <div class="col-xs-offset-6 col-xs-11">
            <img src="../assets/icon/security.png" width="30px">Seguro
          </div>
        </div>
      </div>
    </div>-->

    <div
      style="background-color: #00b19d;display: flex;flex-direction: column;align-items: flex-end;padding: 5px;"
    >
      <div class="content-block">
        <h1 class="content-block">
          <div class="form-avatar" style="margin-bottom: 6px;padding:6px;" width="100%">
            <img src="../assets/logoGalaxPay.png" />
          </div>
        </h1>
      </div>
    </div>

    <dx-popup
      :visible.sync="popupFalhaVisible"
      :drag-enabled="false"
      :close-on-outside-click="true"
      :show-title="true"
      :width="380"
      :height="210"
      class="popup"
      title="Informação"
    >
      <p>
        <span>{{messagem}}</span>
      </p>

      <div class="row end-xs" style="margin-top:10px;margin-bottom: 15px;">
        <div class="col-xs-6">
          <div class="box">
            <dx-button
              text="Ok"
              type="success"
              style="margin-top:15px;"
              tooltip-placement="auto"
              data-toggle="tooltip"
              tooltip="Continuar"
              @click="poppupConfirmar"
            />
          </div>
        </div>
      </div>
    </dx-popup>

    <dx-popup
      :visible.sync="popupOkVisible"
      :drag-enabled="false"
      :close-on-outside-click="true"
      :show-title="true"
      :width="380"
      :height="150"
      class="popup"
      title="Informação"
    >
      <p>
        Full Name:&nbsp;
        <span>Transação realizada com sucesso.</span>
      </p>

      <div class="row end-xs" style="margin-top:10px;margin-bottom: 15px;">
        <div class="col-xs-6">
          <div class="box">
            <dx-button
              text="Continuar"
              type="success"
              style="margin-top:15px;"
              tooltip-placement="auto"
              data-toggle="tooltip"
              tooltip="Continuar"
              @click="poppupConfirmar"
            />
          </div>
        </div>
      </div>
    </dx-popup>

    <div class="content-block dx-card responsive-paddings" id="container-principal">
      <div class="conteudo-principal">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="margin-bottom: 10px;">
            <div class="box">
              <Painel>
                <div slot="title">
                  <b>DADOS DO PAGAMENTO</b>
                </div>
                <div slot="content">
                  <div class="conteudo-janela">
                    <table>
                      <tr>
                        <td width="105px">
                          <b>Cliente:</b>
                        </td>
                        <td>{{pessoa.nome}}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Produto:</b>
                        </td>
                        <td>{{evento.siteEvento}}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Periodicidade:</b>
                        </td>
                        <td>Mensal</td>
                      </tr>

                      <tr>
                        <td>
                          <b>Investimento:</b>
                        </td>
                        <td>{{investimento}}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Painel>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="margin-bottom: 10px;">
            <div class="box">
              <Painel>
                <div slot="title">
                  <b>DADOS DA EMPRESA</b>
                </div>
                <div slot="content">
                  <div class="conteudo-janela">
                    <table>
                      <tr>
                        <td width="100px" height="25px">
                          <b>Razão Social:</b>
                        </td>
                        <td>Instituto Koi Ltda</td>
                      </tr>
                      <tr>
                        <td height="25px">
                          <b>CNPJ:</b>
                        </td>
                        <td>22.369.123/0001-11</td>
                      </tr>
                      <tr>
                        <td height="25px">
                          <b>Contato:</b>
                        </td>
                        <td>(31) 98402-0123 - email: koi@institutokoi.com.br</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Painel>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="margin-bottom: 10px;">
            <div class="box">
              <Painel>
                <div slot="title">
                  <b>FORMAS DE PAGAMENTO</b>
                </div>
                <div slot="content">
                  <div class="conteudo-janela">
                    <dx-list
                      :data-source="parcelas"
                      :show-selection-controls="true"
                      :selection-mode="'single'"
                      :select-all-mode="'allPages'"
                      :selected-item-keys.sync="selectedItemKeys"
                    >
                      <div slot="item" slot-scope="{ data: item }" :item="item">
                        <table>
                          <tr style="padding: 10px;">
                            <td width="30px">
                              <span>{{item.parcela}}</span>
                            </td>
                            <td width="105px">
                              <span>{{item.valorMask}}</span>
                            </td>
                            <td width="80px">
                              <span>{{item.juros}}</span>
                            </td>
                            <td width="130px">
                              <span>{{item.valorBaseMask}}</span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </dx-list>
                  </div>
                </div>
              </Painel>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="margin-bottom: 10px;">
            <div class="box">
              <Painel>
                <div slot="title">
                  <font-awesome-icon icon="shield-alt"></font-awesome-icon>&nbsp
                  <b>PAGAR COM CARTÃO</b>
                </div>
                <div slot="content">
                  <div class="conteudo-janela">
                    <dx-validation-group>
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                          <div class="box" style="margin-bottom:10px;">
                            <span>
                              <div style="margin-bottom:5px;margin-top:5px;">
                                <b>Número do cartão</b>
                              </div>
                            </span>
                            <dx-text-box :value.sync="pagto.cardNumber">
                              <dx-validator>
                                <dx-required-rule message="Informe o número do cartão de crédito" />
                              </dx-validator>
                            </dx-text-box>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                          <div class="box" style="margin-bottom:10px;">
                            <span>
                              <div style="margin-bottom:5px;margin-top:5px;">
                                <b>Bandeira</b>
                              </div>
                            </span>

                            <dx-select-box
                              :items="bandeiras"
                              :show-clear-button="false"
                              placeholder="Selecione"
                              :disabled="false"
                              :searchEnabled="true"
                              v-model="pagto.cardBrand"
                              :value.sync="pagto.cardBrand"
                              display-expr="name"
                              value-expr="key"
                            >
                              <dx-validator>
                                <dx-required-rule
                                  message="Informe a bandeira do cartão de crédito"
                                />
                              </dx-validator>
                            </dx-select-box>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div class="box" style="margin-bottom:10px;">
                            <span>
                              <div style="margin-bottom:5px;margin-top:5px;">
                                <b>Nome escrito no cartão</b>
                              </div>
                            </span>
                            <dx-text-box :value.sync="pagto.cardName">
                              <dx-validator>
                                <dx-required-rule
                                  message="Informe o nome escrito no cartão de crédito"
                                />
                              </dx-validator>
                            </dx-text-box>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12col-lg-12">
                          <div class="box" style="margin-bottom:10px;">
                            <span>
                              <div style="margin-bottom:5px;margin-top:5px;">
                                <b>Validade (mês/ano)</b>
                              </div>
                            </span>
                            <dx-text-box
                              value.sync="pagto.cardValidate"
                              v-model="pagto.cardValidate"
                              mask="00/0000"
                            >
                              <dx-validator>
                                <dx-compare-rule
                                  :comparison-target="ruleValidate"
                                  message="Informe o mês/ano do cartão de crédito. Ex: 01/2025"
                                />
                              </dx-validator>
                            </dx-text-box>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div class="box" style="margin-bottom:10px;">
                            <span>
                              <div style="margin-bottom:5px;margin-top:5px;">
                                <b>Código de segurança</b>
                              </div>
                            </span>
                            <dx-text-box
                              value.sync="pagto.cardCode"
                              mask="0009"
                              v-model="pagto.cardCode"
                            >
                              <dx-validator>
                                <dx-required-rule
                                  message="Informe o código de segurança do cartão de crédito"
                                />
                              </dx-validator>
                            </dx-text-box>
                          </div>
                        </div>
                      </div>

                      <!--<dx-validation-summary/>-->
                      <dx-button text="Confirmar o pagamento" type="success" @click="validate" />
                    </dx-validation-group>
                  </div>
                </div>
              </Painel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 1,
  maximumFractionDigits: 2
});

const decimalFormatter = new Intl.NumberFormat("pt-BR", {
  style: "decimal",
  currency: "BRL",
  minimumFractionDigits: 1,
  maximumFractionDigits: 2
});

// @ is an alias to /src
import ArrayStore from "devextreme/data/array_store";
import Painel from "../components/Painel";
import { DxList, DxItem } from "devextreme-vue/list";
import notify from "devextreme/ui/notify";
import { DxPopup } from "devextreme-vue/popup";

import { loading } from "@/global";

import axios from "axios";

import {
  DxAdapter,
  DxEmailRule,
  DxRequiredRule,
  DxRangeRule,
  DxCompareRule
} from "devextreme-vue/validator";

import {
  DxButton,
  DxTextBox,
  DxSelectBox,
  DxValidator,
  DxValidationGroup,
  DxValidationSummary
} from "devextreme-vue";
import { parse } from "path";

export default {
  name: "home",

  components: {
    DxButton,
    DxSelectBox,
    Painel,
    DxTextBox,
    DxValidator,
    DxAdapter,
    DxEmailRule,
    DxRequiredRule,
    DxRangeRule,
    DxCompareRule,
    DxValidationSummary,
    DxValidationGroup,
    DxList,
    DxItem,
    DxPopup
  },

  computed: {
    pessoa() {
      return this.$store.getters["pessoa"];
    },
    evento() {
      return this.$store.getters["evento"];
    },
    endereco() {
      return this.$store.getters["endereco"];
    },

    complemento() {
      return this.$store.getters["complemento"];
    },

    investimento() {
      const { siteParcelas, valorBase } = this.$store.getters["evento"];
      let investimento = "";
      let c = currencyFormatter.format(valorBase);
      investimento = c.includes(",") ? c : c + ",00";
      if (siteParcelas === 1) {
        investimento = investimento + " (à vista)";
      } else {
        investimento = investimento + ` (até ${siteParcelas} x)`;
      }
      return investimento;
    }
  },

  created() {
    const validatorComponent = new DxValidator({
      propsData: {
        adapter: {
          getValue: this.getCustomValue
        },
        validationRules: [
          { type: "range", min: 0, max: 9, message: "From 1 to 10" }
        ]
      }
    }).$mount();
    this.validator = validatorComponent.instance;
  },

  mounted() {
    window.w = this;
    this.$forceUpdate();
    this.gerarParcelas();
  },

  watch: {
    "pagto.cardNumber": function(d) {
      if (!d) return;
      const card = this.getCardFlag(d);
      if (card) {
        this.pagto.cardBrand = card;
      }
    }
  },

  data() {
    return {
      mensagem:
        "Ocorreu uma falha na transação. Antes de reenviar confirme se os dados do cartão de crédito foram preenchidos corretamente.",
      popupOkVisible: false,
      popupFalhaVisible: false,
      parcelas: [],
      selectedItemKeys: [],
      bandeiras: this.getBandeiras(),
      pagto: {
        cardNumber: "",
        cardBrand: "",
        cardName: "",
        cardValidate: "",
        cardCode: ""
      },
      ruleValidate: () => {
        let card = this.pagto.cardValidate;
        if (card === undefined) return;
        if (card.length < 6) {
          return card + "_";
        }
        let mes = parseInt(card.substr(0, 2));
        if (mes > 0 && mes < 13) {
          let ano = parseInt(card.substr(2));
          let anoServidor = new Date().getFullYear();
          if (ano < anoServidor) {
            return card + "_";
          }
          return card;
        }
        return card + "_";
      }
    };
  },
  methods: {
    currency(valor) {
      let c = currencyFormatter.format(valor);
      if (!c.includes(",")) c = c + ",00";
      return c;
    },

    poppupConfirmar(e) {
      this.popupFalhaVisible = false;
      this.popupOkVisible = false;
    },

    beforeSave() {
      const isPgto = this.selectedItemKeys.length > 0;

      if (!isPgto) {
        const position = {
          at: "center center",
          of: "#bloco1"
        };
        notify(
          {
            message: "Escolha uma forma de pagamento.",
            position,
            width: 300,
            shading: true
          },
          "error",
          3000
        );
        return;
      }
    },

    validate(params) {
      const result = params.validationGroup.validate();
      if (result.isValid) {
        if (this.beforeSave()) {
        }

        if (!this.getCardFlag(this.pagto.cardNumber)) {
          const position = {
            at: "center center",
            of: "#bloco1"
          };
          notify(
            {
              message: "Bandeira não reconhecida para o número do cartão.",
              position,
              width: 300,
              shading: true
            },
            "error",
            3000
          );
          return true;
        }

        let payload = {};
        payload.evento_id = this.evento.id;
        payload.endereco = this.endereco;
        payload.pessoa = this.pessoa;
        payload.card = this.pagto;
        payload.pagto = {
          valorBase: this.selectedItemKeys[0].valorBase,
          valor: this.selectedItemKeys[0].valor,
          parcela: this.selectedItemKeys[0].key
        };
        payload.complemento = this.complemento;

        console.log(payload);

        this.gravar(payload);
        // form data is valid
        //params.validationGroup.reset();
      }
    },

    gravar(payload) {
      loading();
      axios
        .post(`${process.env.VUE_APP_SERVER_URL}/site`, payload)
        .then(res => {
          let mensagem = "Transação realizada com sucesso!";

          loading();

          if (res.response === undefined) {
            this.messagem =
              "Ocorreu uma falha de comunicação com o servidor. Tente novamente mais tarde!";
            this.popupFalhaVisible = true;
            let result = confirm(
              "<div style='margin-left:15px!important;margin-right:15px!important;'><i>Ocorreu uma falha de comunicação com o servidor. Tente novamente mais tarde!</i></div>",
              "Confirmação"
            );
            return;
          }

          if (!res.response.data.type) {
            // options - retornou falha.
            mensagem = res.response.data.message;
            this.popupFalhaVisible = true;
            return;
          }
          const position = {
            at: "center center",
            of: "#bloco1"
          };
          this.popupOkVisible = true;
          /*notify(
            {
              message: mensagem,
              position,
              width: 300,
              shading: true
            },
            "error",
            3000
          );*/
        })
        .catch(error => {
          console.log(error);
          loading();
          const position = {
            at: "center center",
            of: "#bloco1"
          };
          this.popupFalhaVisible = true;
          notify(
            {
              message: error.message,
              position,
              width: 300,
              shading: true
            },
            "error",
            5000
          );
        });
    },

    gerarParcelas() {
      const parcelas = this.evento.siteParcelas;
      const valorBase = this.evento.valorBase;

      for (let i = 0; i < parcelas; i++) {
        let parcela = i + 1;
        let valorMask = this.currency(valorBase / parcela);
        let valorString = decimalFormatter.format(valorBase / parcela);
        let valor = parseFloat(valorString.replace(".", "").replace(",", "."));
        let juros = "sem juros";
        this.parcelas.push({
          id: i + 1,
          key: i + 1,
          parcela: `${parcela} x`,
          valorMask: ` de ${valorMask}`,
          valor: valor,
          juros,
          valorBaseMask: `total de ${this.currency(valorBase)}`,
          valorBase: valorBase,
          parcelas: parcelas
        });
      }
    },

    getCardFlag(cardnumber) {
      cardnumber = cardnumber.replace(/[^0-9]+/g, "");

      let cards = {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard: /^5[1-5][0-9]{14}/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        amex: /^3[47][0-9]{13}/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
        elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}/,
        aura: /^(5078\d{2})(\d{2})(\d{11})$/
      };

      for (let flag in cards) {
        if (cards[flag].test(cardnumber)) {
          return flag;
        }
      }

      return false;
    },

    getBandeiras() {
      return [
        {
          key: "visa",
          name: "Visa"
        },
        {
          key: "mastercard",
          name: "MasterCard"
        },
        {
          key: "diners",
          name: "Diners"
        },
        {
          key: "discover",
          name: "Discover"
        },
        {
          key: "elo",
          name: "Elo"
        },
        {
          key: "amex",
          name: "Amex"
        },
        {
          key: "aura",
          name: "Aura"
        },
        {
          key: "hipercard",
          name: "Hipercard"
        },
        {
          key: "jcb",
          name: "JCB"
        }
      ];
    },

    loading() {
      this.$store.dispatch("setLoadingVisible");
    }
  }
};
</script>

<style scoped>
.conteudo-principal {
  padding: 20px;
}

#container-principal {
  background-color: #f2f2f2;
  padding: 20px;
}

.box {
  background-color: #fff;
}

.dx-card {
  border: 0px solid #dee1e3 !important;
}

.conteudo-janela {
  margin-right: 15px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fafafa;
  color: rgb(0, 0, 0);
  text-align: center;
}
</style>
