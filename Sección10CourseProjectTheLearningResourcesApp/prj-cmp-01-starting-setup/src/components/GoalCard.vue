<template>
  <section>
    <h2>{{ oneGoal.title }}</h2>
    <p>{{ oneGoal.text }}</p>
    <a :href="oneGoal.link"><GitHub alt="Icon description" /></a>
    <button @click="deleteGoal">Delete Goal</button>
  </section>
</template>
<script>
import GitHub from './UI/icons/GitHub.vue';
export default {
  components: {
    GitHub,
  },
  methods: {
    deleteGoal() {
      this.$emit('deleteThisGoal', this.oneGoal.title);
    },
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
  box-shadow: 0 0 10px rgb(39, 34, 183);
  border-radius: 20px;
  background-color: rgb(60, 121, 190);
  color: white;
  font-weight: bold;
  padding: 10px;
}
section a {
  margin-top: 20px;
}
p {
  margin: 20px;
}
button {
  border-radius: 8px;

  background-color: blue;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  font-size: clamp(1rem, 2vh, 2rem); /* Ajuste del tamaño de la fuente */
}
</style>
