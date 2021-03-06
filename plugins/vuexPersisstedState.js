import persistedState from 'vuex-persistedstate'

export default ({ store }) => {
  persistedState({
    key: '_abc',
    reducer: (state) => ({
      Acessibilidade: state.Acessibilidade,
      Colors: state.Colors,
      Cart: state.Cart,
      Produtos: state.Produtos,
      Usuario: state.Usuario,
    }),
    storage: {
      getItem(key) {
        return localStorage.getItem(key)
      },

      setItem(key, value) {
        localStorage.setItem(key, value)
      },

      removeItem(key) {
        localStorage.removeItem(key)
      },
    },
  })(store)
}
