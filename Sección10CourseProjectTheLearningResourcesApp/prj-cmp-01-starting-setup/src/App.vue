<template>
  <TheHeader> Our goals </TheHeader>
  <TheNav @sectionRenderize="sectionToRender"></TheNav>
  <KeepAlive>
  <component  :is="activeSection" :goals="goals">
    
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
        goals: [{
            title: 'My GitHub',
            text: 'This is my firts Goal in the array and I put in your hand my github url!',
            link: 'https://github.com/vicentlozano/'
        }],
    };
  },
  methods: {
    sectionToRender(section) {
this.activeSection = section;
    }
  },
};
</script>
