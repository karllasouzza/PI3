export const state = () => ({
  Itens: [],
  On_Off: false,
})

// mutations
export const mutations = {
  // Visibilidade do Carrinho
  on(state) {
    state.On_Off = true
  },
  off(state) {
    state.On_Off = false
  },

  // Items
  addItens(state, Itens) {
    state.Itens.push(Itens)
    state.On_Off = true
  },
  // edititens(state, Itens) {
  //   function filter(element) {
  //     return element.id === Itens.id
  //   }
  //   const iten = state.Itens
  //   const s = state
  //   const indice = iten.findIndex(filter)
  //   s.Itens.slice([indice]{})
  // },
  deletItens(state, id) {
    const numeroARemover = id

    const indice = state.Itens.findIndex((obj) => obj.valor === numeroARemover)
    state.Itens.splice(indice, 1)
  },
}

// actions
export const actions = {
  add(context, Cart) {
    context.commit('addItens', Cart.Itens)
  },
  delet(context, Cart) {
    context.commit('deletItens', Cart.Itens)
  },
}
