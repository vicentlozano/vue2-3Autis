<template>
  <button @click="increment">Add 2</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions('numbers', ['increment', 'increase']),
  },
};
</script>
