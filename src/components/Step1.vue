<template>
    <div id="lines">
    <div class="_1">
        <div class="step">
          <div class="img">
            <transition appear name="fade">
              <img
                class="left-img"
                src="data:image/png;base64,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"
                alt=""
              />
            </transition>
          </div>
          <div class="text _1_txt">
            <h1>An ASM compiler:</h1>
            <p>
              L asm c est l eau fraiche des le matin, la rose sur les
              pamplemousses. L asm c est l eau fraiche des le matin, la rose sur
              les pamplemousses. L asm c est l eau fraiche des le matin, la rose
              sur les pamplemousses. L asm c est l eau fraiche des le matin, la
              rose sur les pamplemousses.
            </p>
          </div>
        </div>
        <div class="step">
          <div class="text _1_txt">
            <h1>A Virtual Machine:</h1>
            <p>
              La virtual machine, c'est le monde innacessible et pourtant tant
              desire. La virtual machine, c'est le monde innacessible et
              pourtant tant desire. La virtual machine, c'est le monde
              innacessible et pourtant tant desire. La virtual machine, c'est le
              monde innacessible et pourtant tant desire. La virtual machine,
              c'est le monde innacessible et pourtant tant desire.
            </p>
          </div>
          <div class="img">
            <transition appear name="rfade">
            <img
              class="right-img"
              style="transition-delay: 500ms"
              src="data:image/png;base64,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"
              alt=""
            />
            </transition>
          </div>
        </div>
        <div class="step">
          <div id="champ" class="img">
          <transition  appear name="fade">
            <img
              class="left-img"
              style="transition-delay: 1s"
              src="https://i.etsystatic.com/13221305/r/il/a22aa5/1217314060/il_794xN.1217314060_jha1.jpg"
              alt=""
            />
          </transition>
          </div>
          <div class="text _1_txt">
            <h1>Champions:</h1>
            <p>
              La virtual machine, c'est le monde innacessible et pourtant tant
              desire. La virtual machine, c'est le monde innacessible et
              pourtant tant desire. La virtual machine, c'est le monde
              innacessible et pourtant tant desire. La virtual machine, c'est le
              monde innacessible et pourtant tant desire. La virtual machine,
              c'est le monde innacessible et pourtant tant desire.
            </p>
          </div>
        </div>
        </div>
        </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Step1"
};
</script>

<style scoped>
  .step .left-img, .right-img {
    transition: all 1s ease
}
</style>

<style>
.root {
  padding: 0 5vw;
  background: white;
  padding-top: 10px;
}

#lines {
  padding: 3px 5vw;
  background: white;
}

._1 {
  padding: 3px 10vw;
  border-right: 1px solid silver;
  border-left: 1px solid silver;
  background: white;
}

._1_txt {
  font-family: Verdana;
  font-size: 0.3rem;
  text-align: center;
}

.fade-enter{
 margin-right: 200%;
  opacity: 0;
}

.rfade-enter{
 margin-left: 200%;
  opacity: 0;
}

</style>
