<template>
  <fragment>
    <div
      v-for="i in 31"
      :key="i"
      :class="[
        'bubble',
        `slideUp-${Math.floor(Math.random() * 4) + 1}`,
        `color-${['normal', 'blue'][Math.floor(Math.random() * 2)]}`
      ]"
      :style="
        `animation-delay: -${((i - 1) / 30) * 15 + Math.random()}s; ${
          Math.floor(Math.random() * 2) ? 'left' : 'right'
        }: ${Math.random() * 5}vw`
      "
    ></div>
  </fragment>
</template>

<script>
//was 20 / 10
export default {
  name: "bubble"
};
</script>

<style scoped lang="stylus">
@import "../stylus/theme.styl"

.bubble {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    bottom: -25px;
    z-index: 0;
}

.color-blue {
  background-image: $colors.bubble-normal;
}

.color-normal {
  background-image: $colors.bubble-blue;
}

.slideUp-1 {
  animation: slideUp-1 15s ease-in infinite both running;
}

.slideUp-2 {
  animation: slideUp-2 15s ease-in infinite both running;
}

.slideUp-3 {
  animation: slideUp-3 15s ease-in infinite both running;
}

.slideUp-4 {
  animation: slideUp-4 15s ease-in infinite both running;
}

@keyframes slideUp-1 {
  from {
    transform: translateX(0);
    opacity: 0.33;
  }
  50% {
    transform: translateX(-8px);
    opacity: 0.9;
  }
  to {
    opacity: 0.15;
    bottom: 100%;
    transform: translateX(8px);
  }
}

@keyframes slideUp-2 {
  from{
    transform: translateX(0);
    opacity: 0.9;
  }
  50% {
    transform: translateX(30px);
    opacity: 0.33;
  }
  to {
    opacity: 1;
    bottom: 100%;
    transform: translateX(-13px);
  }
}

@keyframes slideUp-3 {
  from{
    transform: translateX(35px);
    opacity: 0.41;
  }
  50% {
    transform: translateX(-35px);
    opacity: 0.81;
  }
  to {
    transform: translateX(25px);
    opacity: 0.74;
    bottom: 100%;
  }
}

@keyframes slideUp-4 {
  from{
    transform: translateX(50px);
    opacity: 0.41;
  }
  50% {
    transform: translateX(-36px);
    opacity: 0.81;
  }
  to {
    transform: translateX(11px);
    opacity: 0.74;
    bottom: 100%;
  }
}
</style>
