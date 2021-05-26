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

  // // Items
  // addItens(state, Itens) {
  //   state.Itens.push(Itens)
  // },

  SomaItens(state, Itens) {
    const numeroARemover = Itens.id

    const indice = state.Itens.findIndex(
      (element) => element.product.id === numeroARemover
    )
    state.Itens[indice].product.quantity++
  },

  SubtraItens(state, Itens) {
    const numeroARemover = Itens.id

    const indice = state.Itens.findIndex(
      (element) => element.product.id === numeroARemover
    )
    if (state.Itens[indice].product.quantity === 0) {
      state.Itens[indice].product.quantity = 0
    } else {
      state.Itens[indice].product.quantity--
    }
  },

  deletItens(state, id) {
    const numeroARemover = id

    const indice = state.Itens.product.findIndex(
      (obj) => obj.id === numeroARemover
    )
    state.Itens.product.splice(indice, 1)
  },

  async products(state) {
    const products = await this.$axios.$get('/api/product')
    state.Itens = products
    console.log(products)
  },
}

// actions
export const actions = {
  add(context, Produtos) {
    context.commit('addItens', Produtos.Itens)
  },
  Soma(context, Produtos) {
    context.commit('SomaItens', Produtos.Itens)
  },
  Sub(context, Produtos) {
    context.commit('SubtraItens', Produtos.Itens)
  },
  delet(context, Produtos) {
    context.commit('deletItens', Produtos.Itens)
  },
}
