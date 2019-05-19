<template>
  <div>
    <div class="_3">
      <div class="galerie">
        <h1 id="_3title">But also a visualizer !</h1>
        <img
          src="https://previews.123rf.com/images/sergeyt/sergeyt1401/sergeyt140100378/25494427-les-graphismes-de-web-de-visualisateur-d-image-s%C3%A9rie-de-kiwi.jpg"
          alt=""
        />
      </div>
    </div>
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
export default {
  name: "Step3"
};
</script>

<style>
._3 {
  overflow: hidden;
  position: relative;
}

#_3title {
  animation-duration: 3s;
  animation-name: slidein;
  text-align: center;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
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
</style>
