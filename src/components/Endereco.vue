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
                    <span style="margin-left:6px;">CPF *</span>
                    <div class="dx-field">
                      <dx-text-box value v-model="pessoa.cpf" mask="000.000.000-00">
                        <dx-validator>
                          <dx-required-rule message="Informe o CPF."/>
                        </dx-validator>
                      </dx-text-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Email *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="pessoa.email">
                      <dx-validator>
                        <dx-required-rule message="Informe o seu email principal."/>
                        <dx-email-rule message="Formato inválido para email."/>
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Nome Completo*</span>
                    <div class="dx-field">
                      <dx-text-box value v-model="pessoa.nome">
                        <dx-validator>
                          <dx-string-length-rule :min="5" message="Informe o seu nome completo.."/>
                          <dx-required-rule message="Informe o seu nome completo."/>
                        </dx-validator>
                      </dx-text-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">RG *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="pessoa.rg">
                      <dx-validator>
                        <dx-required-rule message="Informe o numero do RG."/>
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
                          <dx-required-rule message="Informe o sexo."/>
                        </dx-validator>
                      </dx-select-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Profissão *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="pessoa.profissao">
                      <dx-validator>
                        <dx-required-rule message="Informe a sua profissão."/>
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="box">
                    <span style="margin-left:6px;">Data Nascimento *</span>
                    <div class="dx-field">
                      <dx-date-box :value="pessoa.dnasc" type="date" v-model="pessoa.dnasc">
                        <dx-validator>
                          <dx-required-rule message="Informe a data de nascimento"/>
                        </dx-validator>
                      </dx-date-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
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
                        <dx-required-rule message="Informe o estado civil"/>
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
                  <div class="box">
                    <span style="margin-left:6px;">Telefone Residencial</span>
                    <div class="dx-field">
                      <dx-text-box value v-model="pessoa.tel_resid" mask="(00) 0000-0000"></dx-text-box>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                  <span style="margin-left:6px;">Celular/WhatsApp *</span>
                  <div class="dx-field">
                    <dx-text-box value v-model="pessoa.tel_celular" mask="(00) 00000-0000">
                      <dx-validator>
                        <dx-required-rule message="Informe o seu WatsApp"/>
                      </dx-validator>
                    </dx-text-box>
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
                          <dx-required-rule message="Informe o seu endereço"/>
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
                          <dx-required-rule message="Informe o bairro"/>
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
                        <dx-required-rule message="Informe a cidade"/>
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
                          <dx-required-rule message="Informe o estado"/>
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
                        <dx-required-rule message="Informe o cep"/>
                      </dx-validator>
                    </dx-text-box>
                  </div>
                </div>
              </div>
            </div>

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
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card";
import ArrayStore from "devextreme/data/array_store";

import notify from "devextreme/ui/notify";

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
console.log("service ", service);
console.log(service.getSexos());

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
    window.w = this;
    this.$forceUpdate();
  },

  computed: {
    pessoa() {
      return this.$store.getters["pessoa"];
    },

    endereco() {
      return this.$store.getters["endereco"];
    }
  },

  data() {
    let estadosCivis = service.getEstadosCivis();
    return {
      formValidation: null,
      sexos: service.getSexos(),
      estadosCivis: estadosCivis
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
