<template>
  <div>
    <!--<div class="freebirdFormviewerViewFormBanner freebirdHeaderMast"></div>-->

    <Card :width="'100%'" style="margin-top:-0px;">
      <div slot="top">
        <div class="freebirdFormviewerViewFormBanner freebirdHeaderMast"></div>
      </div>
      <div slot="title">
        <h2>Informações do Aluno</h2>
      </div>
      <div slot="content">
        <div class="form">
          <dx-validation-group>
            <div class="bloco">
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Nome Completo*</span>
                    <div class="dx-field">
                      <dx-text-box value v-model="pessoa.nome">
                        <dx-validator>
                          <dx-string-length-rule :min="5" message="Informe o seu nome completo.." />
                          <dx-required-rule message="Informe o seu nome completo." />
                        </dx-validator>
                      </dx-text-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">CPF *</span>
                    <div class="dx-field">
                      <dx-text-box
                        value
                        v-model="pessoa.cpf"
                        :disabled="true"
                        mask="000.000.000-00"
                      >
                        <dx-validator>
                          <dx-required-rule message="Informe o CPF." />
                        </dx-validator>
                      </dx-text-box>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Email *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="pessoa.email">
                      <dx-validator>
                        <dx-required-rule message="Informe o seu email principal." />
                        <dx-email-rule message="Formato inválido para email." />
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Profissão *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="pessoa.profissao">
                      <dx-validator>
                        <dx-required-rule message="Informe a sua profissão." />
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Sexo *</span>
                    <div class="dx-field">
                      <dx-select-box
                        :items="sexos"
                        :show-clear-button="true"
                        placeholder="Selecione"
                        :disabled="false"
                        :searchEnabled="true"
                        v-model="pessoa.sexo"
                      >
                        <dx-validator>
                          <dx-required-rule message="Informe o sexo." />
                        </dx-validator>
                      </dx-select-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-3 col-md-3">
                  <div class="box">
                    <span style="margin-left:6px;">Data Nascimento *</span>
                    <div class="dx-field">
                      <dx-date-box :value="pessoa.dnasc" type="date" v-model="pessoa.dnasc">
                        <dx-validator>
                          <dx-required-rule message="Informe a data de nascimento" />
                        </dx-validator>
                      </dx-date-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-3 col-md-3">
                  <span style="margin-left:6px;">Estado Civil *</span>
                  <div class="dx-field">
                    <dx-select-box
                      :items="estadosCivis"
                      :show-clear-button="true"
                      placeholder="Selecione"
                      :disabled="false"
                      :searchEnabled="true"
                      v-model="pessoa.estado_civil"
                    >
                      <dx-validator>
                        <dx-required-rule message="Informe o estado civil" />
                      </dx-validator>
                    </dx-select-box>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Facebook</span>
                    <div class="dx-field">
                      <dx-text-box value v-model="pessoa.facebook"></dx-text-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Instagram</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="pessoa.instagram"></dx-text-box>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Celular/WhatsApp *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="pessoa.tel_celular" mask="(00) 00000-0000">
                      <dx-validator>
                        <dx-required-rule message="Informe o seu WatsApp" />
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Tamanho da camisa *</span>
                    <div class="dx-field">
                      <dx-select-box
                        :items="camisas"
                        :show-clear-button="true"
                        placeholder="Selecione"
                        :disabled="false"
                        :searchEnabled="true"
                        v-model="pessoa.camisa"
                      >
                        <dx-validator>
                          <dx-required-rule message="Informe o tamanho da camisa." />
                        </dx-validator>
                      </dx-select-box>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Nome do Padrinho</span>
                    <div class="dx-field">
                      <dx-select-box
                        :search-enabled="true"
                        :data-source="pessoas"
                        search-mode="contains"
                        search-expr="nome"
                        :search-timeout="200"
                        :min-search-length="3"
                        :show-data-before-search="false"
                        display-expr="nome"
                        value-expr="id"
                        :value="1"
                        v-model="complemento.padrinho_id"
                      ></dx-select-box>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Nome do Consultor</span>
                    <div class="dx-field">
                      <dx-select-box
                        :search-enabled="true"
                        :data-source="consultores"
                        search-mode="contains"
                        search-expr="nome"
                        :search-timeout="200"
                        :min-search-length="3"
                        :show-data-before-search="false"
                        display-expr="nome"
                        value-expr="id"
                        :value="1"
                        v-model="complemento.consultor_id"
                      ></dx-select-box>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Endereço *</span>
                    <div class="dx-field">
                      <dx-text-box value v-model="endereco.logradouro">
                        <dx-validator>
                          <dx-required-rule message="Informe o seu endereço" />
                        </dx-validator>
                      </dx-text-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Complemento</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="endereco.compl"></dx-text-box>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Bairro *</span>
                    <div class="dx-field">
                      <dx-text-box value v-model="endereco.bairro">
                        <dx-validator>
                          <dx-required-rule message="Informe o bairro" />
                        </dx-validator>
                      </dx-text-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Cidade *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="endereco.cidade">
                      <dx-validator>
                        <dx-required-rule message="Informe a cidade" />
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Estado *</span>
                    <div class="dx-field">
                      <dx-text-box value v-model="endereco.estado" mask="AA">
                        <dx-validator>
                          <dx-required-rule message="Informe o estado" />
                        </dx-validator>
                      </dx-text-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Cep *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="endereco.cep" mask="00.000-000">
                      <dx-validator>
                        <dx-required-rule message="Informe o cep" />
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </div>
              </div>
            </div>

            <div class="row end-xs">
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
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card";
import ArrayStore from "devextreme/data/array_store";

import notify from "devextreme/ui/notify";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";

import {
  DxCheckBox,
  DxSelectBox,
  DxDateBox,
  DxNumberBox,
  DxButton,
  DxTextBox
} from "devextreme-vue";

import {
  DxValidator,
  DxValidationGroup,
  DxValidationSummary
} from "devextreme-vue";

import {
  DxAdapter,
  DxRequiredRule,
  DxCompareRule,
  DxEmailRule,
  DxPatternRule,
  DxStringLengthRule,
  DxRangeRule
} from "devextreme-vue/validator";

import service from "./data";

const dataSourcePessoa = new DataSource({
  store: new CustomStore({
    //loadMode: "raw",
    key: "id",

    byKey: key => {
      console.log("buscando byKey ", key);
      return Pessoa.getPessoas(key);
    },

    load: function(loadOptions) {
      let params = {};
      let o = {
        isLocalizar: true,
        grupos: ["ALUNO"],
        isLookup: true,
        take: 20,
        page: 1
      };

      if (!loadOptions.searchValue) {
        loadOptions.searchValue = null;
      } else {
        let key = "nome";
        let value = loadOptions.searchValue;
        if (value) {
          o[key] = value;
        }
      }

      let sort = null;

      if (_.isArray(loadOptions.sort)) {
        o["sortSelector"] = loadOptions.sort[0].selector;
        o["sortDirection"] = loadOptions.sort[0].desc ? "DESC" : "ASC";
      }

      return service.getPessoaIndex(o);
    }
  })
});

const dataSourceConsultor = new DataSource({
  store: new CustomStore({
    //loadMode: "raw",
    key: "id",

    byKey: key => {
      console.log("buscando byKey ", key);
      return Pessoa.getPessoas(key);
    },

    load: function(loadOptions) {
      let params = {};
      let o = {
        isLocalizar: true,
        grupos: ["CONSULTOR"],
        isLookup: true,
        take: 20,
        page: 1
      };

      if (!loadOptions.searchValue) {
        loadOptions.searchValue = null;
      } else {
        let key = "nome";
        let value = loadOptions.searchValue;
        if (value) {
          o[key] = value;
        }
      }

      let sort = null;

      if (_.isArray(loadOptions.sort)) {
        o["sortSelector"] = loadOptions.sort[0].selector;
        o["sortDirection"] = loadOptions.sort[0].desc ? "DESC" : "ASC";
      }

      return service.getPessoaIndex(o);
    }
  })
});

export default {
  name: "home",
  components: {
    Card,
    DxCheckBox,
    DxSelectBox,
    DxDateBox,
    DxNumberBox,
    DxButton,
    DxTextBox,
    DxValidator,
    DxValidationGroup,
    DxValidationSummary,
    DxAdapter,
    DxRequiredRule,
    DxCompareRule,
    DxEmailRule,
    DxPatternRule,
    DxStringLengthRule,
    DxRangeRule
  },

  mounted() {
    //this.$forceUpdate();
  },

  computed: {
    pessoa() {
      return this.$store.getters["pessoa"];
    },

    endereco() {
      return this.$store.getters["endereco"];
    },

    complemento() {
      return this.$store.getters["complemento"];
    }
  },

  data() {
    let estadosCivis = service.getEstadosCivis();
    return {
      formValidation: null,
      camisas: ["PP", "P", "M", "G", "GG", "XGG"],
      sexos: service.getSexos(),
      estadosCivis: estadosCivis,
      consultores: dataSourceConsultor,
      pessoas: dataSourcePessoa
    };
  },
  methods: {
    validate(params) {
      console.log("validando... ");
      console.log(params);
      const result = params.validationGroup.validate();

      if (result.isValid) {
        this.setar();
        this.$router.push("/pagamento");
      } else {
        console.log("falhou na validação");
      }
    },

    handleSubmit(e) {
      e.preventDefault();

      return;
    },

    validateForm(e) {
      this.formValidation = e;
      const v = e.component.validate();
    },

    setar() {
      this.$store.dispatch("setPessoa", this.pessoa);
      this.$store.dispatch("setEndereco", this.endereco);
      this.$store.dispatch("setComplemento", this.complemento);
    },

    voltar() {
      this.$router.push("/");
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

.bloco {
  padding: 15px;
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

.form {
  padding: 5px 20px 20px 20px;
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
