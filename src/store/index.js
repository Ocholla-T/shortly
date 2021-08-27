import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import urls from './modules/urls';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState()],
  modules: {
    urls,
  },
});
