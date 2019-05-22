<template>
    <div class="_3">
       <h1 id="_3title">But also a visualizer !</h1>
       <div class="video">
        <img
          src="https://previews.123rf.com/images/sergeyt/sergeyt1401/sergeyt140100378/25494427-les-graphismes-de-web-de-visualisateur-d-image-s%C3%A9rie-de-kiwi.jpg"
          alt=""
        />
      </div>
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

.video {
  width: 100%;
  height: 100vh;
}

.video img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transition: opacity 1s ease;
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
</style>
