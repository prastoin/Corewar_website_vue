<template>
  <div>
    <header>
      <p>What is Corewar ?</p>
    </header>
    <Step1></Step1>
    <Step2></Step2>
    <Step3></Step3>
    <Card></Card>
    <footer>
      <nav class="txt_foot">
        <p>Contact</p>
        <p>About us</p>
        <p>Things</p>
        <p>NON</p>
      </nav>
    </footer>
  </div>
</template>

<script>
import Step1 from "../components/Step1.vue";
import Step2 from "../components/Step2.vue";
import Step3 from "../components/Step3.vue";
import Card from "../views/cards.vue"

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
    Card
    
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Header*/
header {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

header > p {
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
    padding: 10px 10vw;
  }
  header > p {
    font-size: 3rem;
  }
}
</style>
