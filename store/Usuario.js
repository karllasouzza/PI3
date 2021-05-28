export const state = () => ({
  User: {},
  logado: false,
})

// mutations
export const mutations = {
  // Items
  addUser(state, User) {
    state.User = User.user
    state.logado = User.success
  },
  clearUser(state, User) {
    state.User = {}
    state.logado = false
  },
}

// actions
export const actions = {
  SetUser(context, Usuario) {
    context.commit('addUser', Usuario.User)
  },
}
