<template>
  <div>
    <section>Filter</section>
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
            v-for="coach in filteredCoches"
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
        </BaseCard
      >
    </section>
  </div>
</template>

<script>
import CoachItem from '../../coaches/CoachItem.vue';
export default {
  components: { CoachItem },

  computed: {
    filteredCoches() {
      return this.$store.getters['myCoaches/coaches'];
    },
    coachesList() {
      return this.$store.getters['myCoaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['myCoaches/hasCoaches'];
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
