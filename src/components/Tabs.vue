<template>
  <ul>
    <li
      v-for="item in items"
      :key="item"
      :class="{ active: item === value }"
      @click="onClick(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["items", "value"],
  methods: {
    onClick(item) {
      this.$emit("input", item);
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0 5vw;
  padding: 0 1vw;
  font-size: 1rem;
  font-family: Verdana;
}

li {
  align-self: left;
  display: inline-block;
  padding: 10px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

li:hover {
  cursor: pointer;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition-duration: 0, 5s;
}

li.active {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

</style>
