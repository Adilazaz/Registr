import AuthService from '../services/auth.service';

const initialState = { status: { loggedIn: false } };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {

    async logins({ commit }, payload) {
      try {
        const res = await AuthService.login(payload)
        const { status, data } = res;
        console.log(res);
        
        if (status === 201) {
          return {res}
        } else {
          throw `Add contract variation order status: ${status}`
        }
      } catch (err) {
        throw `Add contract variation order: ${err}`
      }
    }
  },

  mutations: {
    loginSuccess(state) {
      state.status.loggedIn = true;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
    },
  }
};
