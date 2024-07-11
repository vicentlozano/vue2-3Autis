<template>
  <div>
    <CoachFilter @change-filter="setFilters"></CoachFilter>
    <section>
      <BaseCard
        ><div class="controls">
          <BaseButton mode="outline">Refresh</BaseButton>
          <BaseButton link :to="'/register'">Register as Coach</BaseButton>
        </div></BaseCard
      >

      <BaseCard
        ><ul v-if="hasCoaches">
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
    coachesList() {
      return this.$store.getters['myCoaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['myCoaches/hasCoaches'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
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
