const grupo = [
  { id: 1, nome: "ALUNO" },
  { id: 2, nome: "CONSULTOR" },
  { id: 3, nome: "FORNECEDOR" }
];

const estado_civil = ["SOLTEIRO", "CASADO", "UNIÃO ESTÁVEL", "DIVOCIADO"];

const camisas = ["PP", "P", "M", "G", "GG", "XGG"];

const sexos = ["MASCULINO", "FEMININO"];

export default {
  getGrupos() {
    return grupo;
  },

  getEstadosCivis() {
    return estado_civil;
  },

  getCamisas() {
    return camisas;
  },

  getSexos() {
    return sexos;
  }
};
