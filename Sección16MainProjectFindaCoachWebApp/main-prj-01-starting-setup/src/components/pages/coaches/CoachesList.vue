<template>
  <div>
    <section>
      <h2>Filter</h2>
    </section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul>
        <li v-for="coach of coachesList" :key="coach.id">
          <div class="container">
            <router-link to="/coaches/:id">{{ coach.firstName }}</router-link>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    coachesList() {
      return this.$store.getters['myCoaches/coaches'];
    },
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  padding: 1rem 2rem;
}
</style>
