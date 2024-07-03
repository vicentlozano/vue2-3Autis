<template>
  <TheHeader> Our goals </TheHeader>
  <TheNav @sectionRenderize="sectionToRender"></TheNav>
  <KeepAlive>
    <component
      :is="activeSection"
      :goals="goals"
      @sendGoal="addNewGoal"
      @deleteGoalSelected="deleteGoal"
    >
    </component>
  </KeepAlive>
</template>

<script>
import AddGoals from './components/layout/AddGoals.vue';
import MyGoals from './components/layout/MyGoals.vue';
import TheHeader from './components/layout/TheHeader.vue';
import TheNav from './components/layout/TheNav.vue';
export default {
  components: {
    TheHeader,
    TheNav,
    MyGoals,
    AddGoals,
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
