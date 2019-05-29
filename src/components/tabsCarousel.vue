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
  transition: all 0.5s ease;
  display: inline-block;
  padding: 10px;
  border-top: 1px solid black;
}

li:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.8);
}

li.active {
  background: rgba(255, 255, 255, 0.8);
}
</style>
