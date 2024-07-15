export default {
  async contactCoach(context, paylod) {
    const newRequest = {
      userEmail: paylod.email,
      message: paylod.message,
    };
    const response = await fetch(
      `https://coaches-cf9f9-default-rtdb.europe-west1.firebasedatabase.app/requests/${paylod.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );
    if (!response.ok) {
      //error...
      const error = new Error(responseData.message || 'Failed to send');
      throw error;
    }
    const responseData = await response.json();
    newRequest.id = responseData.name;
    newRequest.coachId = paylod.coachId;

    context.commit('addRequest', newRequest);
  },

  async loadRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://coaches-cf9f9-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=
` + token
    );
    const responseData = await response.json();
    if (!response.ok) {
      /// ...error
      const error = new Error(
        responseData.message || 'Failed to fetch request!'
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};
