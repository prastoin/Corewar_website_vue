<template>
  <div id="root-1">
    <intersect
      @enter="status = 'transform: rotatex(0deg);'"
      @leave="status = ''"
    >
      <div id="container">
        <div
          v-for="hs_pic in HS_imgs"
          class="card"
          :style="status + hs_pic"
          :id="hs_pic"
          :key="hs_pic"
        ></div>
      </div>
    </intersect>
  </div>
</template>

<script>
import Intersect from "vue-intersect";

export default {
  name: "card",
  data() {
    return {
      status: "",
      HS_imgs
    };
  },
  components: {
    Intersect
  }
};

const HS_imgs = [
  "background-image: url(./Hearthstone_fbecerri.png)",
  "background-image: url(./Hearthstone_dde-jesus.png)",
  "background-image: url(./Hearthstone_prastoin.png)"
];
</script>

<style scoped>
#root-1 {
  height: 40vh;
}

#container {
  overflow: hidden;
  position: relative;
  z-index: 6;
  align-items: center;
  display: flex;
  justify-content: center;
  perspective: 800px;
  width: 100%;
  height: 100%;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/436243/blurbox.jpg");
  background-size: cover;
  background-position: center;
}

.card {
  width: 230px;
  height: 330px;
  background-size: cover;
  transform: rotateX(50deg);
  transition: all 1s ease-in-out;
  z-index: 3;
}

.card:first-child {
  transform: rotateX(50deg) translateX(100%);
}

.card:last-child {
  transform: rotateX(50deg) translateX(-100%);
}

#root-1:hover .card {
  transform: rotatex(0deg);
}

@media screen and (max-width: 684px) {
  .card {
    width: calc(230px / 1.5);
    height: calc(330px / 1.5);
  }
}

@media screen and (max-width: 450px) {
  .card {
    width: calc(230px / 1.7);
    height: calc(330px / 1.7);
  }
}

@media screen and (max-width: 380px) {
  .card {
    width: calc(230px / 2);
    height: calc(330px / 2);
  }
}

@media screen and (max-width: 320px) {
  .card {
    width: calc(230px / 3);
    height: calc(330px / 3);
  }
}
</style>
