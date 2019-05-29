<template>
  <div class="_2">
    <tabs :items="Object.keys(images)" v-model="selected"></tabs>
    <!--@input="item => selected = item" :value="selected"-->
    <div id="galerie_1" class="galerie">
      <transition-group
        :name="r_l_status"
        :key="selected"
        @after-leave="animate = false"
        @before-enter="animate = true"
        tag="div"
      >
        <img
          v-for="(image, i) in images[selected]"
          :key="image"
          :src="image"
          v-show="index[selected] === i"
        />
      </transition-group>
      <div class="nav-bar">
        <button
          v-for="(valeur, n) in images[selected]"
          :key="n"
          :id="n"
          @click="goto(n)"
          :class="{ active: n === index[selected] }"
        />
      </div>
      <span @click="slide_left" id="left" class="button">&lt;</span>
      <span @click="slide_right" id="right" class="button">&gt;</span>
    </div>
  </div>
</template>

<script>
import Tabs from "./tabsCarousel.vue";

const images = {
  ASM: [
    "/carousel/asm_first.png",
    "/carousel/asm_disasm.png",
    "/carousel/asm_bonus.png"
  ],
  VM: ["/carousel/vm_argsusage.png", "/carousel/vm_mainLoop.png"],
  Champions: [
    "https://images.pexels.com/photos/751373/pexels-photo-751373.jpeg?auto=compress&cs=tinysrgb&dpr=1&wi500",
    "https://is5-ssl.mzstatic.com/image/thumb/Music5/v4/2e/b3/11/2eb31109-6bee-ce77-2d54-9d9a5b97e4c7/dj.igrgkhwb.jpg/1200x630bb.jpg",
    "http://lh3.googleusercontent.com/bE7Lcs7NmP71xdDZ2u3VtsYF2WD4vikdmebybZgvdrZIGHiwD1dFEwqIUqFyDE9krg=w300"
  ]
};

export default {
  name: "Step2",
  data() {
    return {
      index: { ASM: 0, VM: 0, Champions: 0 },
      selected: "ASM",
      images,
      animate: false,
      r_l: false
    };
  },
  computed: {
    r_l_status() {
      return this.r_l ? "l-slide" : "r-slide";
    }
  },
  components: {
    Tabs
  },
  methods: {
    goto(n) {
      if (this.animate) return;
      this.r_l = n < this.index[this.selected] ? true : false;
      this.index[this.selected] = n;
    },
    slide_left() {
      if (this.animate) return;
      this.r_l = true;
      this.index[this.selected] =
        (this.index[this.selected] + this.images[this.selected].length - 1) %
        this.images[this.selected].length;
    },
    slide_right() {
      if (this.animate) return;
      this.r_l = false;
      this.index[this.selected] =
        (this.index[this.selected] + 1) % this.images[this.selected].length;
    }
  }
};
</script>

<style lang="stylus">

@import "../stylus/theme.styl"

.r-slide-enter-active {
  animation: slideInRight 0.5s;
}

.r-slide-leave-active {
  animation: slideOutRight 0.5s;
}

.l-slide-enter-active {
  animation: slideInLeft 0.5s;
}

.l-slide-leave-active {
  animation: slideOutLeft 0.5s;
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slideOutRight {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slideOutLeft {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

._2
{
    padding-top: 10px;
    background: $colors.gray;
}

._2:hover {
    #left,
    #right {
        opacity: 1;
    }
    .nav-bar button {
      opacity: 0.8;
    }
}

.galerie {
    z-index: 6;
    position: relative;
    width: 100%;
    height: 80vh;
    background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    overflow: hidden;
    img {
        position: absolute;
        width: 100vw;
        height: 100%;
        object-fit: contain;
//        transition: transform 1s ease, opacity 1s ease;
    }
}

/* Clickable*/

#left {
    top: 47.5%;
    left: 0px;
    margin-left: 10px;
    opacity: 0;
}

#right {
    opacity: 0;
    margin-right: 10px;
    top: 47.5%;
    right: 0;
}

.nav-bar {
  position absolute;
  text-align: center;
  bottom: 10px;
  left: 0;
  right: 0;
  button {
    margin: 0px 2px;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #000;
    opacity: 0;
    transition: all 0.5s ease;
    border-radius: 10px;
  }
  button.active {
    background-color: #FFF;
  }
}

.button {
    position: absolute;
    font-size: 2rem;
    padding: 12px 24px;
    color: white;
    cursor: pointer;
    border: 1px solid silver;
    border-radius: 5px;
    background-color: #555;
    transition: all 0.5s ease;
}

.button:hover {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
