// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('token');
    }
  },
  actions: {},
  modules: {}
});
