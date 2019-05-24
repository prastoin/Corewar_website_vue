<template>
  <div
    style="overflow: hidden; position: relative; display: flex; justify-content: center;"
  >
    <div class="_4">
      <a class="link" href="https://corewar.netlify.com" target="_blank">
        <img class="front" src="../../public/img.png" />
        <div class="blocker"></div>
      </a>
    </div>
    <a class="title" href="https://corewar.netlify.com" target="blank"
      >corewar.netlify.com</a
    >
  </div>
</template>

<script>
export default {
  name: "corewar-link"
};
//               <p class="static">LINK TO THE WEBSITE</p>
</script>

<style scoped lang="stylus">
._4 {
    background: white;
    width: 100%;
    height: 40vh;
    transform: translateZ(-1px) scale(2);
    transform-style: preserve-3d;
}

.title {
    background: silver
    border-radius: 7px;
    font-size: 1.5rem;
    color: #7A7A7A;
    cursor: pointer;
    position absolute;
    top: 49%;
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
