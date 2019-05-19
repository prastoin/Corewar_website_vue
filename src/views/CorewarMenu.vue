<template>
  <div>
    <Step1></Step1>
    <Step2></Step2>
    <Step3></Step3>
  </div>
</template>

<script>
import Step1 from "../components/Step1.vue";
import Step2 from "../components/Step2.vue";
import Step3 from "../components/Step3.vue";
// @ is an alias to /src
export default {
  name: "corewar_menu",
  data() {
    return {
      show: false
    };
  },
  components: {
    Step1,
    Step2,
    Step3
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
  padding: 3px 10vw;
  border-right: 1px solid silver;
  border-left: 1px solid silver;
  background: white;
}

._1_txt {
  font-family: Verdana;
  font-size: 0.3rem;
  text-align: center;
}

.step:before {
  background: white;
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

@media screen and (min-width: 576px) {
  .txt_foot {
    font-size: 1rem;
  }
  ._1_txt {
    font-size: 1rem;
  }
  ._1 {
    padding: 3px 10vw;
  }
  header > p {
    font-size: 3rem;
  }
}
</style>
