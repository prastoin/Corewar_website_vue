<template>
  <div>
    <step :step_1="1"></step>
  </div>
</template>

<script>
import step_1 from "./step_1.vue";
// @ is an alias to /src
export default {
  name: "corewar_menu",
  data() {
    return {
      show: false
    };
  },
  components: {
    step_1
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* First */
._1 {
  margin: 0 2.5vw;
  padding: 0 5vw;
  border-right: 1px solid silver;
  border-left: 1px solid silver;
}

._1_txt {
  font-family: Verdana;
  font-size: 1rem;
  text-align: center;
}

.step {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* IN STEP*/

.step .img {
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 50%;
}

.step .text {
  box-sizing: border-box;
  background: #f5f5f5;
  text-align: center;
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.step > .text > p {
  margin: 0;
}
</style>
