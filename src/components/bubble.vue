<template>
  <div>
    <div style="height: 200vh; width: 200vw; background-color: silver"></div>
    <div class="bubble"></div>
  </div>
</template>

<script>
export default {
  name: "bubble"
};
</script>

<style scoped lang="stylus">
.bubble {
    clear: both;
    overflow: auto;
    background-color: gold;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline;
    position: absolute;
    bottom: 0;
    left: 25px;
    z-index: 99;
}
</style>
