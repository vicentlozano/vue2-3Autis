<template>
  <h3>{{ normalizedCounter }}</h3>
  <p>Normally...</p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters(['normalizedCounter']),
  },
};
</script>
