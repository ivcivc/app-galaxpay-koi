<template>
  <div class="ivc-bloco">
    <header>
      <slot name="top"></slot>
    </header>
    <main>
      <div class="ivc-card">
        <div class="ivc-janela">
          <div class="ivc-card-title">
            <slot name="title"></slot>
          </div>
          <div class="ivc-card-conteudo">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  props: {
    width: { type: String, default: "100%" },
    height: { type: String, default: "auto" }
  },
  data() {
    return {
      tam: {
        width: this.width,
        height: this.height
      }
    };
  }
};
</script>

<style  >
header {
  grid-area: cabecalho;
}

main {
  grid-area: conteudo;
}

.ivc-bloco {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: "cabecalho" "conteudo";
}

.ivc-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ivc-card-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.ivc-card-conteudo {
  display: flex;
  flex-direction: column;
  align-items: initial;
}

.ivc-detalhes {
  display: flex;
  flex-direction: column;
  justify-content: normal;
  flex-wrap: wrap;
}
.ivc-detalhes {
  background-color: rgb(233, 240, 243);
  width: 100%;
}

.ivc-janela {
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: rgb(233, 240, 243);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.37);
  width: 100%;
}

.ivc-janela {
  min-width: 400px;
  max-width: 1000px;
}
</style>
