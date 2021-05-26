export const state = () => ({
  User: {},
})

// mutations
export const mutations = {
  // Items
  addUser(state, User) {
    state.User = User
  },
}

// actions
export const actions = {
  SetUser(context, Usuario) {
    context.commit('addUser', Usuario.User)
  },
}
