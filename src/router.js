import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Endereco from "./components/Endereco";
import Pagamento from "./components/Pagamento";
import Cpf from "./components/Cpf";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      props: true,
      component: Home
      /*children: [
        {
          path: "endereco/:id",
          components: { default: Endereco },
          props: true
        },
        { path: "pagamento/:id", component: Pagamento }
      ]*/
    },
    {
      path: "/dados",
      name: "dados",
      props: true,
      component: Endereco
    },

    {
      path: "/cpf",
      name: "cpf",
      props: true,
      component: Cpf
    },

    {
      path: "/pagamento",
      name: "pagamento",
      props: true,
      component: Pagamento
    }
  ]
});

//  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
