import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //movie: null,
  },
  mutations: {
    setMovies(state, movie) {
      //state.movie = movie;
    },
  },
  actions: {
    async getMovies({ commit }, payload) {
      //const url = `http://www.omdbapi.com/?t=${payload.amount}&apikey=${process.env.VUE_APP_KEY}`;
      commit("setMovies", result.data);
    },
  },
  modules: {},
});
