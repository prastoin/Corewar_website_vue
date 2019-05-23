<template>
  <div class="_3">
    <h1 id="_3title">But also a visualizer !</h1>
    <div class="video">
      <iframe
        src="https://www.youtube.com/embed/XMCyfFIWIo0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
  z-index: 2;
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

.video iframe {
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
