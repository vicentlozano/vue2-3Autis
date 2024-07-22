<template>
  <nav>
    <router-link to="/"><button>User List</button></router-link>
    <router-link to="/prueba"><button>Prueba</button></router-link>
  </nav>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <div class="container">
    <div class="block" :class="{ moveblock: moveClass }"></div>
    <button @click="animation">Animate</button>
  </div>

  <div class="container">
    <button @click="setVisible">Toogle Paragraph</button>
    <transition
      name="para"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <p v-if="paraVisible">This is only sometimes visible...</p>
    </transition>

    <transition
      :css="false"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <p v-if="paraVisible">This is only sometimes visible...</p>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <button @click="hideDialog">Close it!</button>
    <p>This is a test dialog!</p>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogIsVisible: false,
      moveClass: false,
      moveClass2: false,
      paraVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    goPrueba() {
      this.$router.push('/prueba');
    },
    goUserList() {
      this.$router.push('/');
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animation() {
      this.moveClass = !this.moveClass;
      console.log('animation on ...');
    },
    setVisible() {
      this.paraVisible = !this.paraVisible;
    },
    animation2() {
      this.moveClass2 = !this.moveClass2;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    beforeEnter(el) {
      console.log('before enter...');
      el.style.color = 'red';
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log('Before leave ...');
      el.style.color = 'blue';
    },
    enter(el, done) {
      console.log('enter...');
      let round = 1;
      const interval = setInterval(function () {
        el.style.opacity = round * 0.09;
        round++;
        if (round > 100) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    leave(el, done) {
      console.log('leave...');
      let round = 1;
      let auxiliar = 1;
      const interval = setInterval(function () {
        round = round - auxiliar * 0.01;
        el.style.opacity = round;
        if (round <= 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log('after Leave ...');
    },
    afterEnter() {
      console.log('after Enter ...');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  height: 100%;
}
body {
  overflow-x: hidden;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
  margin: 5px;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transfrom 0.4s ease-out; */
}
.moveblock {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}

.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.3s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.para-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.para-leave-active {
  transition: all 0.3s ease-in;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0.1;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
nav {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
