<template>
  <div>
    <BaseDialog :show="!!error" title="An error ocurred!" @close="handleError">
      <p>{{ error }}</p>
    </BaseDialog>
    <section>
      <BaseCard>
        <header>
          <h2>Request Received</h2>
        </header>

        <BaseSpinner v-if="isLoading"></BaseSpinner>

        <ul v-else-if="hasRequest">
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
  </div>
</template>

<script>
import RequestItem from '../../requests/RequestItem.vue';
export default {
  components: { RequestItem },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    hasRequest() {
      return !this.isLoading && this.$store.getters['myRequests/hasRequest'];
    },
    requests() {
      return this.$store.getters['myRequests/requests'];
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('myRequests/loadRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadRequests();
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
