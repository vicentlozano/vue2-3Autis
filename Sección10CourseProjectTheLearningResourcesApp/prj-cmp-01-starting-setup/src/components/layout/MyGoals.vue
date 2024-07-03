<template>
    <li v-for="(goal,index) of goals" :key="index">
<GoalCard :oneGoal="goal"></GoalCard>
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

    },
}

</script>
<style scoped>
li {
  list-style-type: none;
}
</style>