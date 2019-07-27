<template>
  <div>
    <Card :width="'60%'" style="margin-top:-0px;">
      <div slot="top">
        <div class="freebirdFormviewerViewFormBanner freebirdHeaderMast"></div>
      </div>
      <div slot="title">
        <h2>Informe o seu CPF.</h2>
      </div>
      <div slot="content">
        <template>
          <div class="janela">
            <div class="ivc-detalhes">
              <div class="form">
                <dx-validation-group>
                  <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                      <div class="box">
                        <span style="margin-left:6px;">Digite o seu CPF *</span>
                        <div class="dx-field">
                          <dx-text-box value v-model="cpf" mask="000.000.000-00">
                            <dx-validator>
                              <dx-required-rule message="Informe o seu CPF." />
                              <dx-compare-rule
                                :comparison-target="ruleValidate"
                                message="Informe um CPF válido."
                              />
                            </dx-validator>
                          </dx-text-box>
                        </div>
                      </div>
                    </div>
                  </div>
                  <dx-validation-summary />

                  <div class="row between-xs">
                    <div class="col-xs-2">
                      <div class="box">
                        <dx-button
                          text="Voltar"
                          type="success"
                          style="margin-top:15px;"
                          tooltip-placement="auto"
                          data-toggle="tooltip"
                          tooltip="Voltar"
                          @click="voltar"
                        />
                      </div>
                    </div>
                    <div class="col-xs-2">
                      <div class="box">
                        <dx-button
                          text="Continuar"
                          type="success"
                          style="margin-top:15px;"
                          tooltip-placement="auto"
                          data-toggle="tooltip"
                          tooltip="Continuar"
                          @click="validate"
                        />
                      </div>
                    </div>
                  </div>
                </dx-validation-group>
              </div>
            </div>
          </div>
        </template>
        <br />
      </div>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import DxButton from "devextreme-vue/button";
import Card from "../components/Card";
import ArrayStore from "devextreme/data/array_store";
import axios from "axios";
import { loading } from "@/global";

const validarCpf = require("validar-cpf");

import {
  DxTextBox,
  DxValidator,
  DxValidationGroup,
  DxValidationSummary
} from "devextreme-vue";

import {
  DxAdapter,
  DxRequiredRule,
  DxCompareRule,
  DxPatternRule,
  DxStringLengthRule,
  DxRangeRule
} from "devextreme-vue/validator";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 4
});

export default {
  name: "cpf",
  components: {
    DxButton,
    Card,
    DxTextBox,
    DxValidator,
    DxValidationGroup,
    DxValidationSummary,
    DxAdapter,
    DxRequiredRule,
    DxCompareRule,
    DxPatternRule,
    DxStringLengthRule,
    DxRangeRule
  },

  mounted() {
    this.$forceUpdate();
    this.cpf = this.$store.getters["cpf"];
    //this.$store.dispatch("getEventos");
  },

  created() {
    /*const validatorComponent = new DxValidator({
      propsData: {
        validationRules: [
          { type: "range", min: 0, max: 9, message: "From 1 to 10" }
        ]
      }
    }).$mount();
    this.validator = validatorComponent.instance;*/
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
      return this.$store.getters["getEventos"];
    }
  },

  data() {
    return {
      evento: null,
      ruleValidate: () => {
        let cpf = this.cpf;
        if (!cpf) return 1;
        if (cpf === undefined) return 1;
        if (cpf === "") return 1;

        if (validarCpf(cpf)) {
          console.log("validado ", cpf);
          return cpf;
        } else {
          console.log("nao validado ", cpf);
          return cpf + "__";
        }
      },
      cpf: ""
    };
  },
  methods: {
    strip(html, index) {
      let d = document.getElementById("a" + index);
      if (d) {
        d.innerHTML = html;
      }
    },

    voltar() {
      this.$router.push("/");
    },

    validate(params) {
      console.log("validando... ");
      console.log(params);
      const result = params.validationGroup.validate();

      if (result.isValid) {
        this.$store.dispatch("setCPF", this.cpf);
        this.getCPF(this.cpf).then(r => {
          if (r.length > 0) {
            this.$store.dispatch("setPessoa", r[0]);
            const endereco = r[0].endereco;
            this.$store.dispatch("setEndereco", endereco ? endereco : {});
          } else {
            this.$store.dispatch("setPessoa", { cpf: this.cpf });
          }
          this.$router.push("/dados");
        });
      } else {
        console.log("falhou na validação");
      }

      //params.validationGroup.reset();
    },

    async getCPF(cpf) {
      loading();
      const url = `${process.env.VUE_APP_SERVER_URL}/site/getCPF`;
      const data = {
        method: "post",
        responseType: "json",
        url,
        data: {
          cpf
        }
      };
      const retorno = await axios(data)
        .then(res => {
          loading();
          return res.data;
        })
        .catch(e => {
          loading();
          return e.data;
        });
      return retorno;
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

.form {
  padding: 15px;
}

.botaoSelecionado {
  padding: 15px;
  align-self: end;
}
</style>
