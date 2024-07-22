<template>
   <ul v-for="product of products.list" :key="product.name">
    <ProductItem :name="product.name" :price="product.price"></ProductItem>
   </ul>

</template>

<script setup>
import { onMounted } from 'vue';
import ProductItem from '../components/ProductItem.vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const products = reactive({ list: [] });

onMounted(() => {
  products.list = store.getters.getProducts;
});
</script>


<style scoped>


</style>