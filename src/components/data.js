import axios from "axios";

const grupo = [
  { id: 1, nome: "ALUNO" },
  { id: 2, nome: "CONSULTOR" },
  { id: 3, nome: "FORNECEDOR" }
];

const estado_civil = ["SOLTEIRO", "CASADO", "UNIÃO ESTÁVEL", "DIVOCIADO"];

const camisas = ["P", "M", "G", "GG", "EXG"];

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
  },

  async getPessoaIndex(payload) {
    try {
      return axios({
        method: "get",
        url: `${process.env.VUE_APP_SERVER_URL}/pessoas?page=${
          payload.skip
        }&limit=${payload.take}`,
        responseType: "json",
        params: payload,
        data: {}
      })
        .then(res => {
          let data = res.data;
          let totalCount = 0;
          // eslint-disable-next-line
          if (_.has(data, "pagination")) {
            totalCount = data.pagination.total;
          } else {
            totalCount = data.total;
          }
          return {
            data: data.data,
            totalCount
          };
        })
        .catch(e => {
          return {
            data: [],
            totalCount: 0
          };
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    }
  },

  async getEventosSite(payload) {
    try {
      return axios({
        method: "get",
        url: `${process.env.VUE_APP_SERVER_URL}/site/getEventosSite`,
        responseType: "json"
      })
        .then(res => {
          let data = res.data;

          console.log("retornei , data");
          return data;
        })
        .catch(e => {
          return [];
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    }
  }
};
