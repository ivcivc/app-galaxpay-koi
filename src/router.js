import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Endereco from "./components/Endereco";
import Pagamento from "./components/Pagamento";

Vue.use(Router);

export default new Router({
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
      path: "/pagamento",
      name: "pagamento",
      props: true,
      component: Pagamento
    }
  ]
});

//  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
