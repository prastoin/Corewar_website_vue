<template>
  <div id="root">
    <header>
      <p class="step-title" style="text-decoration: underline overline;">
        What is Corewar ?
      </p>
    </header>
    <Step1></Step1>
    <Step2></Step2>
    <Step4></Step4>
    <Step3></Step3>
    <Card class="HS"></Card>
    <footer>
      <nav class="txt_foot">
        <p>Contact</p>
        <p>About us</p>
        <p>Github</p>
      </nav>
    </footer>
    <Bubble></Bubble>
  </div>
</template>

<script>
import Step1 from "../components/Step1.vue";
import Step2 from "../components/Step2.vue";
import Step3 from "../components/Step3.vue";
import Step4 from "../components/Step4.vue";
import Card from "../views/cards.vue";
import Bubble from "../components/bubble.vue";

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
    Step3,
    Step4,
    Card,
    Bubble
  }
};
</script>

<style lang="stylus">

@import "../stylus/theme.styl"

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  background-image: $colors.fond;
  position: relative;
  overflow: hidden;
}

/* Header*/
header {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.step-title {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.1rem;
  margin: 20px;
}
/* footer */
.txt_foot {
  display: flex;
  justify-content: center;
  font-size: 0.5rem;
  font-family: Verdana;
}

.txt_foot > p {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  margin-left: 5px;
}

.txt_foot > p:not(:last-child) {
  padding-right: 5px;
  border-right: 2px solid black;
}

/* STEP */
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
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.step > .text > p {
  line-height: 150%;
  padding-top: 5px;
  text-align: left;
  margin: 0;
}

.HS {
  z-index: 99;
}

@media screen and (min-width: 576px) {
  .txt_foot {
    font-size: 1rem;
  }
  ._1_txt {
    font-size: 1rem;
  }
  ._1 {
    padding: 10px 10vw;
  }
  .step-title {
    font-size: 3rem;
  }
}
</style>
