export default {
  contactCoach(context, paylod) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: paylod.coachId,
      userEmail: paylod.email,
      message: paylod.message,
    };
    context.commit('addRequest',newRequest);
  },
};
