<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
}

#app {
  background:  radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
