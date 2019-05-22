<template>
    <div class="_4">
        <div class="parallax">
            <div class="padd parallax_layer parallax_layer-base">
                <img class="front" src="./img.png" alt="">
            </div>
            <div class="padd parallax_layer parallax_layer-back">
                <div id="front" class="title">For</div>
            </div>

        </div>
    </div>    
</template>

<script>
export default {
    name:"corewar-link"
}
//               <p class="static">LINK TO THE WEBSITE</p>
</script>

<style scoped lang="stylus">
._4 {
    background: white;
    width: 100%;
    height: 50vh;
    position: relative;
}

#front {
    font-size: 2rem;
    color: black;
}

#back {
    width: 1000%;
    background-image: url(img.png);
}

.title {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.parallax {
    perspective: 1px;
    height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;
}

.parallax_layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.padd {
    padding-top: 50vh;
    padding-right: 0px;
    padding-bottom: 50vh;
    padding-left: 0px;
}

.parallax_layer-base {
  transform: translateZ(0);
}

.parallax_layer-back {
  transform: translateZ(-1px);
} 

.flou {
    filter: blur(4px);
}
</style>
