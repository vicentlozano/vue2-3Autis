<template>
  <section>
    <BaseCard
      ><h2>Register as a coach now!</h2>
      <CoachForm @save-data="saveData"></CoachForm
    ></BaseCard>
  </section>
</template>

<script>
import CoachForm from '../../coaches/CoachForm.vue';
export default {
  components: { CoachForm },
  props: {},
  
  methods: {
    saveData(data) {
      this.$store.dispatch('myCoaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped></style>
