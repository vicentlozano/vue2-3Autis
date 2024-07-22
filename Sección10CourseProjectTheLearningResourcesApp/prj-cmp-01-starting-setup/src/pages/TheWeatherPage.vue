<template>
  <div class="container"><TheWeather :city="'Gandia'"></TheWeather></div>
  <div class="container"><TheWeather2 :city="'Gandia'"></TheWeather2></div>

  
</template>

<script setup>
import TheWeather from '../components/layout/TheWeather.vue';
import TheWeather2 from '../components/layout/TheWeather2.vue';
</script>

<style scoped>
.container{

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}

</style>

