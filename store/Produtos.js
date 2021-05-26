export const state = () => ({
  Itens: [
    {
      id: 1,
      img:
        'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
      title: 'Sementes de Romã',
      descricao: 'Sementes de Romã',
      preco: 15.0,
      autor: 'karlla Souzza',
      quantidade: 0,
    },
    {
      id: 2,
      img:
        'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
      title: 'Sementes de Romã',
      descricao: 'Sementes de Romã',
      preco: 15.0,
      autor: 'karlla Souzza',
      quantidade: 0,
    },
    {
      id: 3,
      img:
        'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
      title: 'Sementes de Romã',
      descricao: 'Sementes de Romã',
      preco: 15.0,
      autor: 'karlla Souzza',
      quantidade: 0,
    },
  ],
  On_Off: true,
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
    if (state.Itens[indice].quantidade === 0) {
      state.Itens[indice].quantidade = 0
    } else {
      state.Itens[indice].quantidade--
    }
  },

  deletItens(state, id) {
    const numeroARemover = id

    const indice = state.Itens.findIndex((obj) => obj.id === numeroARemover)
    state.Itens.splice(indice, 1)
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
