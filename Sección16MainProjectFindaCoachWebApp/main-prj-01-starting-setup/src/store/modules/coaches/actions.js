export default {
  registerCoach(context, data) {
    const coachData = {
      id: 'c3',
      firstName: data.first,
      lastName: data.last,
      descripction: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    context.commit('registerCoach', coachData);
  },
};
