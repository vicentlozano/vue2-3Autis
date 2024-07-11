<template>
  <TheHeader></TheHeader>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';
export default {
  components: { TheHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
li {
  list-style-type: none;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
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
</style>
