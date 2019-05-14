<template>
  <div class="home">
    <button @click="show = !show">Lol</button>
    <div v-if="show">
      Hello World je suis une licorne
      <button @click="show = false">Hide</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      show: false
    };
  },
  components: {}
};
</script>
