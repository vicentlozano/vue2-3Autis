export default {
  increment(context) {
    setTimeout(function () {
      context.commit('increment');
    }, 2000);
  },
};
