import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventos: [],
    evento: {},
    pessoa: {},
    endereco: {}
  },
  mutations: {
    setEvento(state, payload) {
      state.evento = payload;
    },
    setEventos(state, payload) {
      state.eventos = payload;
    },
    setPessoa(state, payload) {
      state.pessoa = payload;
    },
    setEndereco(state, payload) {
      state.endereco = payload;
    }
  },
  actions: {
    setEvento({ commit }, payload) {
      commit("setEvento", payload);
    },

    setEventos({ commit }, payload) {
      commit("setEventos", payload);
    },

    getEventos({ commit }) {
      const eventos = [
        {
          dInicio: "2019-06-10T03:00:00.000Z",
          dTermino: "2019-06-14T03:00:00.000Z",
          valorBase: 1500,
          obs:
            "Endereço do <i>evento:</i> Hotel Fazenda Vale Amanhecer.<br/>R. Teófilo Otoní, 91 - Fernão Dias, Igarapé - MG, www.valeamanhecer.com.br</br>Dúvidas ligue para (31) 98402-0123 ou envie um e-mail para koi@institutokoi.com.br",
          siteExibir: "SIM",
          siteParcelas: 1,
          siteEvento: "Gaivotas",
          id: 1,
          ok: false,
          imagem:
            "http://www.institutokoi.com.br/assets/images/koi-gaivotas-1080x1080.jpg"
        },
        {
          dInicio: "2019-06-10T03:00:00.000Z",
          dTermino: "2019-06-14T03:00:00.000Z",
          valorBase: 1423.89,
          obs:
            "<p><strong>Local do evento:</strong> Hotel Fazenda Vale do Amanhecer</p><p><strong>Endereço</strong>: R. Teófilo Otoní, 91 - Fernão Dias, Igarapé - MG</p><p>www.valeamanhecer.com.br</p><p>Dúvidas ligue para (31) 98402-0123</p><p>ou envie um e-mail para koi@institutokoi.com.br</p>",
          siteExibir: "SIM",
          siteParcelas: 2,
          siteEvento: "Leader Training 57 Plus Aumentado",
          id: 2,
          ok: false,
          imagem:
            "http://www.institutokoi.com.br/assets/images/lt-57-1080x1080.jpg"
        },

        {
          dInicio: "2019-06-10T03:00:00.000Z",
          dTermino: "2019-06-14T03:00:00.000Z",
          valorBase: 1423.89,
          obs:
            '<p><strong>Local do evento:</strong> <span style="color: rgb(79, 63, 224);">Hotel Fazenda Vale do Amanhecer</span></p><p><strong>Endereço</strong>: R. Teófilo Otoní, 91 - Fernão Dias, Igarapé - MG - <em> www.valeamanhecer.com.br</em></p><p>Dúvidas ligue para (31) 98402-0123</p><p>ou envie um e-mail para koi@institutokoi.com.br</p>',
          siteExibir: "SIM",
          siteParcelas: 11,
          siteEvento: "Renascimento",
          id: 3,
          ok: false,
          imagem:
            "  http://www.institutokoi.com.br/assets/images/renascimento-1080x1080.jpg"
        },
        {
          dInicio: "2019-06-10T03:00:00.000Z",
          dTermino: "2019-06-14T03:00:00.000Z",
          valorBase: 1500,
          obs:
            "Endereço do <i>evento:</i> Hotel Fazenda Vale Amanhecer.<br/>R. Teófilo Otoní, 91 - Fernão Dias, Igarapé - MG, www.valeamanhecer.com.br</br>Dúvidas ligue para (31) 98402-0123 ou envie um e-mail para koi@institutokoi.com.br",
          siteExibir: "SIM",
          siteParcelas: 1,
          siteEvento: "Gaivotas",
          id: 1,
          ok: false,
          imagem: ""
        }
      ];

      commit("setEventos", eventos);
    },

    setPessoa({ commit }, payload) {
      commit("setPessoa", payload);
    },
    setEndereco({ commit }, payload) {
      commit("setEndereco", payload);
    }
  },

  getters: {
    getEventos(state) {
      return state.eventos;
    },
    pessoa(state) {
      return state.pessoa;
    },
    endereco(state) {
      return state.endereco;
    }
  }
});
