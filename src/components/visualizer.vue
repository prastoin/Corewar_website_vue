<template>
  <div class="_3">
    <div
      id="video-desc"
      style="display: flex; flex-direction: column; width: 50%; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;"
    >
      <intersect @enter="status = ' active'">
        <div :class="'video_txt' + status">
          CECI EST UN TEXTE<br />
          je m'appelle David est j'ai utiliser cet outil de professionel
        </div>
      </intersect>
      <div :class="'video_txt' + status" style="animation-delay: 0.50s;">
        CECI EST UN TEXTE<br />
        Voici comment acceder au tutoriel !.
      </div>
      <div :class="'video_txt' + status" style="animation-delay: 1s;">
        CECI EST UN TEXTE<br />
        OUi OUI il existe un visu 2D bcp plus beau que le 3D
      </div>
    </div>
    <div class="videoBack">
      <div class="video">
        <iframe
          src="https://www.youtube.com/embed/XMCyfFIWIo0?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Intersect from "vue-intersect";

export default {
  name: "Step3",
  components: {
    Intersect
  },
  data() {
    return {
      status: ""
    };
  }
};
</script>

<style scoped>
._3 {
  overflow: hidden;
  position: relative;
  z-index: 2;
  height: 60vh;
  display: flex;
  justify-content: space-between;
}

.video_txt {
  margin: 0 10%;
  justify-self: baseline;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.4);
  text-align: center;
  font-size: 0.8rem;
  width: auto;
  opacity: 0;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.videoBack {
  width: 50%;
  height: 100%;
  top: 0;
  z-index: 4;
  position: relative;
}

.video {
  padding: 2%;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background: linear-gradient(to right, #2c5364, #203a43, #2c5364);
}

.active {
  animation: spawnLeft 1s ease forwards running;
}

@keyframes spawnLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

#video-desc .video_txt:not(:first-child) {
  margin-top: 5px;
}

.title_2 {
  text-align: center;
  width: 100vw;
  z-index: 4;
  font-size: 2rem;
}

#_3title {
  animation-duration: 3s;
  animation-name: slidein;
  text-align: center;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

.videoBack iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 9;
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

@media screen and (min-width: 576px) {
  .video_txt {
    font-size: 1rem;
  }
}
</style>
