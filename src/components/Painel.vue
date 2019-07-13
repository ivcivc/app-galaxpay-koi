<template>
  <div class="principal" :style="tam">
    <header>
      <div class="title-content">
        <slot name="title"/>
      </div>
    </header>
    <main>
      <div class="main-content">
        <slot name="content"/>
      </div>
    </main>
    <footer>
      <div class="footer-content">
        <slot name="footer"/>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: String, default: "100%" },
    height: { type: String, default: "auto" },
    maxWidth: { type: String, default: "100%" },
    maxHeight: { type: String, default: "auto" }
  },
  data() {
    return {
      tam: {
        "max-width": this.maxWidth,
        "max-height": this.maxHeight,
        width: this.width,
        height: this.height
      }
    };
  }
};
</script>

<style>
.principal {
  box-sizing: border-box;
  border: 1px solid rgba(54, 64, 74, 0.08);
  border-radius: 5px;
  background-clip: padding-box;
  background-color: whitesmoke;
  /*box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.37);*/
  min-width: 60px;
  min-height: 60px;
}

header {
  grid-area: cabecalho;
}

main {
  grid-area: conteudo;
}

footer {
  grid-area: rodape;
}
.principal {
  display: grid;
  min-height: 12vh;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 25px;
  grid-template-areas: "cabecalho" "conteudo" "rodape";
  background-color: white;
}

.title-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.main-content {
  padding: 0px 0px 0px 15px;
  display: flex;
  flex-direction: column;
}

.footer-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
}
</style>
