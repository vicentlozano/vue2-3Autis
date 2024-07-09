<template>
  <h3>{{ counter }}</h3>
  <p>We do more ... x2 !</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
</script>
