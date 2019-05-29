<template>
  <div id="lines">
    <div class="_1">
      <div class="step">
        <div class="img">
          <transition appear name="fade">
            <img class="left-img" src="/asm-2.png" alt="" />
          </transition>
        </div>
        <div class="text _1_txt">
          <h1>An ASM compiler:</h1>
          <p>
            The ASM, for assembler, is one of the two .exe in the project.<br />
            He’s a compiler, his goal is to convert “.s” file, in a school made
            assembly language (see below) into binaries files “.cor” file that
            is readable by the Virtual Machine.<br />
            There’s two parts to parse for the asm, the header and then the
            prog.<br />
            In the prog different kinds of informations can be found,
            instructions, labels, arguments.<br />
            To manage with that we’re using a hash table, also we’ve implemented
            a code span error management, based on rust one.<br />
          </p>
        </div>
      </div>
      <div class="step">
        <div class="text _1_txt">
          <h1>A Virtual Machine:</h1>
          <p>
            The virtual machine, the second .exe, is the arena, where everything
            takes sense, rules that found the games are check by the vm.<br />
            Each .cor given by args to the vm are proportionally loaded in the
            memory.<br />
            Processes are reading the circular memory and applying the
            instructions they receive.<br />
            The main instruction is “live”: champion’s number, if the num is not
            a valid it goes to the void.<br />
            A process dies if he doesn’t call a live in CYCLE_TO_DIE cycles.<br />
            During a cycle all processes play once.<br />
            When all processes are dead, last calling live champions is check to
            elect a winner.<br />
            Check ASM carousel below to see all instruction and some codes.<br />
          </p>
        </div>
        <div class="img">
          <transition appear name="rfade">
            <img
              class="right-img"
              style="transition-delay: 500ms"
              src="/vm.png"
              alt=""
            />
          </transition>
        </div>
      </div>
      <div class="step">
        <div id="champ" class="img">
          <transition appear name="fade">
            <img
              class="left-img"
              style="transition-delay: 1s"
              src="/CHAMPS_VUE.png"
              alt=""
            />
          </transition>
        </div>
        <div class="text _1_txt">
          <h1>Champions:</h1>
          <p>
            Each champions have the same goal, staying alive by calling live for
            their own numbers player, by the way the number player is given
            either by the user or randomly.<br />
            There is a real distinction between champions and processes,
            processes are independents of champions.<br />
            At the begin of the game a process spawn at the start of each
            champions’prog loaded in the memory.<br />
            But they’re not assigned to their starting champ, they might read an
            enemy prog after during the game.<br />
            In .s file you can find 4 kinds of instructions: Movement (zjmp),
            writing (sti st ..), loading (fork ld ldi ..), operators (add sub
            ..).<br />
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
.step .left-img,
.right-img {
  transition: all 1s ease;
}
</style>

<style lang="stylus">

@import "../stylus/theme.styl"

.root {
  padding: 0 5vw;
  background: white;
  padding-top: 10px;
}

#lines {
  padding: 3px 5vw;
  background: $colors.gray;
}

._1 {
  padding: 3px 10vw;
}

._1_txt {
  font-family: Verdana;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 10px;
}

.fade-enter {
  margin-right: 200%;
  opacity: 0;
}

.rfade-enter {
  margin-left: 200%;
  opacity: 0;
}
</style>
