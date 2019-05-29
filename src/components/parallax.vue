<template>
  <div
    style="overflow: hidden; position: relative; width: 100vw; margin-top: 20px; display: flex"
  >
    <div class="_4">
      <a class="link" href="https://corewar.netlify.com" target="_blank">
        <img class="front" src="../../public/img.png" />
        <div class="blocker"></div>
      </a>
    </div>
    <a class="title" href="https://corewar.netlify.com" target="blank"
      >But also a visualizer !</a
    >
  </div>
</template>

<script>
export default {
  name: "corewar-link"
};
</script>

<style scoped lang="stylus">
._4 {
    z-index: 6;
    background: white;
    width: 100%;
    height: 30vh;
    transform: translateZ(-1px) scale(2);
    transform-style: preserve-3d;
}

.title {
    z-index: 999;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 7px;
    font-size: 3rem;
    color: #7A7A7A;
    cursor: pointer;
    position absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.front {
    width: 100%;
    height: 90vh;
    margin-top: -20vh;
    object-fit: cover;
}

.link {
    display: inline-block;
    width: 100%;
    position: relative;
}

.blocker {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
}
</style>
