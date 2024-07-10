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

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  margin: 10px;
  border: 2px solid orange;
  border-radius: 20px;
  text-align: center;
}

.button {
  display: inline-block;
  border-radius: 20px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  color: inherit;
  background-color: rgb(79, 187, 76);
  cursor: pointer;
  margin: 3px;
  color: white;
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
