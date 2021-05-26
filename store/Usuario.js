export const state = () => ({
  User: [],
})

// mutations
export const mutations = {
  // Items
  addUser(state, User) {
    state.User.push(User)
  },
}

// actions
export const actions = {
  SetUser(context, Usuario) {
    context.commit('addUser', Usuario.User)
  },
}
