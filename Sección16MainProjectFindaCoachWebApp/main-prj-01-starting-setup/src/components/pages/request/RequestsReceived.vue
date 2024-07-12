<template>
  <section>
    <BaseCard>
      <header>
        <h2>Request Received</h2>
      </header>
      <ul v-if="hasRequest">
        <RequestItem
          v-for="request of requests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.message"
        ></RequestItem>
      </ul>
      <h3 v-else>You haven't received any request yet!</h3>
    </BaseCard>
  </section>
</template>

<script>
import RequestItem from '../../requests/RequestItem.vue';
export default {
  components: { RequestItem },
  computed: {
    hasRequest() {
      return this.$store.getters['myRequests/hasRequest'];
    },
    requests() {
      return this.$store.getters['myRequests/requests'];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
