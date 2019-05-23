<template>
  <div id="root-1">
    <div id="container">
      <div
        v-for="hs_pic in HS_imgs"
        class="card"
        :style="hs_pic"
        :id="hs_pic"
        :key="hs_pic"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      HS_imgs
    };
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
  height: 50vh;
}

#container {
  overflow: hidden;
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
</style>
