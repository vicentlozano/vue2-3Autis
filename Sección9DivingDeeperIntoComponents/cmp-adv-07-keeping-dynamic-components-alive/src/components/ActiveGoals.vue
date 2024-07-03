<template>
  <h2>Active Goals</h2>
  <ul>
    <li v-for="goal of myGoals" :key="goal">{{ goal }}</li>
  </ul>
</template>
<script>
export default {
  props: {
    myGoals:{
      type: Array,
      required:true
    },
  },
  data() {
    return {
     
    };
  },
  methods: {},
};
</script>
