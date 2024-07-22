export default {
    registerCoach(state,payload) {
      state.coaches.push(payload);
    },
    setCoaches(state,paylod) {
state.coaches = paylod;
    },
    setFetchTimeStamp(state) {
      state.lastFetch = new Date().getTime();
    }
  }