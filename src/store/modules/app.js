const state = {
    sidebarCollapse: false
};
const mutations = {
    setSidebarCollapse(state) {
        state.sidebarCollapse = !state.sidebarCollapse;
    }
};
const actions = {
    toggleSidebar({ commit }) {
        commit('setSidebarCollapse');
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
//# sourceMappingURL=app.js.map