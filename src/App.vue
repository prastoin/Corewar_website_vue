<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<style scoped lang="stylus">
#app {
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

#nav
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
</style>
