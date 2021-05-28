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
  },

  SomaItens(state, Itens) {
    const numeroARemover = Itens.id

    const indice = state.Itens.findIndex(
      (element) => element.id === numeroARemover
    )
    state.Itens[indice].quantidade++
  },

  SubtraItens(state, Itens) {
    const numeroARemover = Itens.id

    const indice = state.Itens.findIndex(
      (element) => element.id === numeroARemover
    )
    if (state.Itens[indice].quantidade === 1) {
      state.Itens.splice(indice, 1)
    } else {
      state.Itens[indice].quantidade--
    }
  },

  deletItens(state, id) {
    const numeroARemover = id

    const indice = state.Itens.findIndex((obj) => obj.id === numeroARemover)
    state.Itens.splice(indice, 1)
  },
}

// actions
export const actions = {
  add(context, Cart) {
    context.commit('addItens', Cart.Itens)
  },
  Soma(context, Cart) {
    context.commit('SomaItens', Cart.Itens)
  },
  Sub(context, Cart) {
    context.commit('SubtraItens', Cart.Itens)
  },
  delet(context, Cart) {
    context.commit('deletItens', Cart.Itens)
  },
}
