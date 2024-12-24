import AuthService from '../services/auth.service';

const initialState = { status: { loggedIn: false } };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {

    async logins({ commit }, payload) {
      try {
        const res = await AuthService.login(payload)
        const { status } = res
        if (status === 201) {
          return {"id":14,"email":"adil","firstName":"Name","lastName":"Name","roles":"ADMIN", "password":"pass"}
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
