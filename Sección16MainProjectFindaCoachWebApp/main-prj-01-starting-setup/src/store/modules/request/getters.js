export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    console.log(state.requests);
    return state.requests.filter((request) => request.coachId === coachId);
  },
  hasRequest(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
