<template>
  <div class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
text-align: center;


    
}</style>
