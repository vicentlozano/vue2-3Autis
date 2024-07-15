<template>
  <div>
    <section>
      <BaseCard>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </BaseCard>
      <BaseCard>
        <header>
          <h2>Interested? Reach out now!</h2>
          <BaseButton link :to="contactLink" v-if="!isContactPage"
            >Contact</BaseButton
          >
        </header>
        <router-view></router-view>
      </BaseCard>
    </section>
    <section>
      <BaseCard>
        <BaseBadge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></BaseBadge>
        <p>{{ description }}</p>
      </BaseCard>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return { selectedCoach: null };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    isContactPage() {
      return this.$route.path.endsWith('/contact');
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['myCoaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
