<template>
  <section>
    <h2>{{ oneGoal.title }}</h2>
    <p>{{ oneGoal.text }}</p>
    <a :href="oneGoal.link"><GitHub alt="Icon description" /></a>
  </section>
</template>
<script>
import GitHub from './UI/icons/GitHub.vue';
export default {
  components: {
    GitHub,
  },
  props: {
    oneGoal: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0, 0, 0, black;
  border-radius: 20px;
  background-color: rgb(60, 121, 190);
  color: white;
  font-weight: bold;
}
section a {
  margin-top: 20px;
}

</style>
