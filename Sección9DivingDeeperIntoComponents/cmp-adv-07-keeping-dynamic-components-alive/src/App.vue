<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('add-goals')">Add Goals</button>
    <button @click="setSelectedComponent('remove-goals')">Remove Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>-->

    <!--Esta estiqueta mantiene los valores de los componentes dinamicos sin destruirlos cuando vamos de uno a otro -->
    <keep-alive>
      <component :is="selectedComponent" @removeYourGoal="removeFunction" @myNewGoal="addFunction" :myGoals="goals"></component>
    </keep-alive>
    <!-- Esta etiqueta junto con  :is nos permite elegir que componentes elegir...-->
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from "./components/ActiveGoals.vue";
import AddGoals from "./components/AddGoals.vue";
import RemoveGoals from "./components/RemoveGoals.vue";

export default {
  components: {
    TheHeader,
    ActiveGoals,
    AddGoals,
    RemoveGoals,
  },
  props: {
    removeYourGoal: String,
    myNewGoal: String,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      goals: ["I learned about Vue.js"],

    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
    addFunction (newGoal) {
      this.goals.push(newGoal);

    },
    removeFunction (deleteGoal) {
      this.goals = this.goals.filter(goal=> goal != deleteGoal);},
    },
  
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
