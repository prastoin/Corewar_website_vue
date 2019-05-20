<template>
  <div id="app">
    <div id="nav">
      <router-link to="/corewar">Corewar</router-link> |
      <router-link to="/hello">Hello</router-link> |
      <router-link to="/card">Hearthstone</router-link>
    </div>
    <router-view />
  </div>
</template>
<style scoped lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

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
