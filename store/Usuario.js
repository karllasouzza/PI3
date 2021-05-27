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
}

// actions
export const actions = {
  SetUser(context, Usuario) {
    context.commit('addUser', Usuario.User)
  },
}
