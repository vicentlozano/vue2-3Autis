export default {
  contactCoatch() {},
  setRequest(state,paylod) {
    state.requests = paylod;
  },
  addRequest(state, paylod) {
    state.requests.push(paylod);
  },
};
