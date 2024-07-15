let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },

  didAutoLogout(context) {
    context.dispatch('logOut');
    context.commit('didAutoLogout');
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }
    timer = setTimeout(() => {
      context.dispatch('didAutoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });
    }
  },
  logOut(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);
    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
AIzaSyBQnxOsKRp3cG11yggeVvkBQUcKk4BW4i0
`;
    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
AIzaSyBQnxOsKRp3cG11yggeVvkBQUcKk4BW4i0
`;
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();
    if (!response.ok) {
      //error
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }
    const expiresIn = responseData.expiresIn * 1000;

    const expirationDate = new Date().getTime() + expiresIn;
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.idToken);
    localStorage.setItem('tokenExpirationDate', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('didAutoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
};
