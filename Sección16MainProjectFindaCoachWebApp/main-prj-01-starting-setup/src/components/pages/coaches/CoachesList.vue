<template>
  <div>
    <BaseDialog :show="!!error" title="An error ocurred!" @close="handleError">
      <p>{{ error }}</p>
    </BaseDialog>
    <section><CoachFilter @change-filter="setFilters"></CoachFilter></section>
    <section>
      <BaseCard
        ><div class="controls">
          <BaseButton mode="outline" @click="loadCoaches(true)"
            >Refresh</BaseButton
          >
          <BaseButton link to="/auth?redirect=register" v-if="!isLogegdIn"
            >Login to Register as Coach</BaseButton
          >
          <BaseButton
            v-if="isLogegdIn && !isCoach && !isLoading"
            link
            :to="'/register'"
            >Register as Coach</BaseButton
          >
        </div>
        <div v-if="isLoading">
          <BaseSpinner></BaseSpinner>
        </div>

        <ul v-else-if="hasCoaches">
          <CoachItem
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :areas="coach.areas"
            :description="coach.description"
            :hourly-rate="coach.hourlyRate"
          >
          </CoachItem>
        </ul>
        <h3 v-else>No coaches found</h3>
      </BaseCard>
    </section>
  </div>
</template>

<script>
import CoachItem from '../../coaches/CoachItem.vue';
import CoachFilter from '../../coaches/CoachFilter.vue';
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['myCoaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    isLogegdIn() {
      return this.$store.getters.isAuthenticated;
    },
    coachesList() {
      return this.$store.getters['myCoaches/coaches'];
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['myCoaches/hasCoaches'];
    },

    isCoach() {
      return this.$store.getters['myCoaches/isCoach'];
    },
  },
  methods: {
    handleError() {
      this.error = null;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('myCoaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
