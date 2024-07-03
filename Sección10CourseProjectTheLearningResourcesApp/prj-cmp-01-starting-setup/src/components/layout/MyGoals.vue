<template>
    <li v-for="(goal,index) of goals" :key="index">
<GoalCard :oneGoal="goal"  @deleteThisGoal="deleteGoal"></GoalCard>
    </li>
</template>
<script>
import GoalCard from '../GoalCard.vue';
export default {
    components: {
        GoalCard
    },
    props: {
        goals: {
            type: Array,
            required: true,
        }
        
    },

    data() {
        return {

        }
    },
    methods: {
deleteGoal(goal){
    this.$emit('deleteGoalSelected',goal)
}
    },
}

</script>
<style scoped>
li {
  list-style-type: none;
  padding-top: 20px;

}
</style>