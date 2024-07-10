<template>
  <ul>
    <li v-for="request of requests" :key="request.message">
      <div class="container">
        <p><strong>Email:</strong> {{ request.email }}</p>
        <p><strong>Message:</strong> {{ request.message }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    requests() {
      return this.$store.getters['myRequests/requests'];
    },
  },
};
</script>

<style scoped>
.container {
  flex-direction: column;
  width: 80vw;
}
</style>
