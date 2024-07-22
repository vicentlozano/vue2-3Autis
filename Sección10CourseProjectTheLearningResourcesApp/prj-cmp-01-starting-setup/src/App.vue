<template>
  <TheHeader> Our goals </TheHeader>
  
  <TheWeatherPage></TheWeatherPage>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import TheWeatherPage from './pages/TheWeatherPage.vue';
export default {
  components: {
    TheHeader,
   
    TheWeatherPage
  },

  data() {
    return {
      activeSection: 'MyGoals',
      goals: [
        {
          title: 'My GitHub',
          text: 'This is my firts Goal in the array and I put in your hand my github url!',
          link: 'https://github.com/vicentlozano/',
        },
      ],
    };
  },
  methods: {
    sectionToRender(section) {
      this.activeSection = section;
    },
    addNewGoal(newGoal) {
      newGoal.title =
        newGoal.title.charAt(0).toUpperCase() + newGoal.title.slice(1);
      newGoal.text =
        newGoal.text.charAt(0).toUpperCase() + newGoal.text.slice(1);
      this.goals.push(newGoal);
    },
    deleteGoal(selected) {
      this.goals = this.goals.filter((goal) => goal.title != selected);
    },
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
</style>
