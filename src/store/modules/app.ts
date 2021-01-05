// import Cookies from 'js-cookie'
import { MutationTree, ActionTree, Module } from 'vuex'

interface State {
  sidebarCollapse: boolean
}

const state: State = {
  sidebarCollapse: false
}

const mutations:MutationTree<State> = {
  setSidebarCollapse (state) {
    state.sidebarCollapse = !state.sidebarCollapse
  }
}

const actions: ActionTree<State, any> = {
  toggleSidebar ({ commit }) {
    commit('setSidebarCollapse')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
} as Module<State, any>
