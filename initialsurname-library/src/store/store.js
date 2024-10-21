import { createStore } from 'vuex'
export const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      Users: []
    }
  },
  mutations: {
    setLoginStatus(state, status) {
      state.isLoggedIn = status
    },
    register(state, user) {
      state.Users.push(user)
    },
    getUser(state, username) {
      if (state.Users.length !== 0) {
        return state.Users.find((user) => user.username === username) || null
      } else {
        return null
      }
    }
  },
  actions: {
    getUSer({ commit }, username) {
      commit('register', username)
    },
    register({ commit }, user) {
      commit('register', user)
    },
    login({ commit }) {
      setTimeout(commit('setLoginStatus', true), 1000)
    },
    logout({ commit }) {
      commit('setLoginStatus', false)
    }
  }
})
