<template>
  <div class="container">
    <h2>{{ name }}</h2>
    <h3>{{ price }}</h3>
    <p>{{ description }}</p>
    <input type="number" v-model="newPrice" />
    <button @click="changePrice">Change price</button>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useStore } from 'vuex';
const props  = defineProps({
  name: String,
  price: Number,
  description: String,
});
const store = useStore();
const newPrice = ref(null);

function changePrice() {
    console.log(props.name);
  let products = store.getters.getProducts;
  let index = products.findIndex((product) => product.name === props.name);
  if (index !== -1) {
    products[index].price = parseFloat(newPrice.value);
    store.dispatch('updateProducts', products);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
