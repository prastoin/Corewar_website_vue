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
import Tabs from "./Tabs";

const images = {
  ASM: [
    "/carousel1.png",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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"
  ],
  VM: [
    "https://www.tate.org.uk/sites/default/files/styles/width-960/public/images/jarmanbluetmdisplay.jpg",
    "https://assets.wordpress.envato-static.com/uploads/2018/01/image1.png",
    "https://ak0.picdn.net/shutterstock/videos/340510/thumb/1.jpg"
  ],
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
