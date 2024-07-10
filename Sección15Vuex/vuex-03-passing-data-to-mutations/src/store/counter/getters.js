export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(state, getters) {
    const basicCounter = getters.basicCounter;
    if (basicCounter > 100) {
      return 0;
    }

    return basicCounter;
  },
  basicCounter(state) {
    return state.counter;
  },
};
