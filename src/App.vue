<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link active-class="classe" exact tag='li'> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: calc(100% - 40px);
}

body {
  background-color: rgb(233, 240, 243);
}

div {
  border: solid 0px red;
  background: auto;
}

div1111 {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 3px dodgerblue;
  background: #fff;
}
</style>
