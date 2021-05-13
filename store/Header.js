export const state = () => ({
  home: true,
  products: false,
  about: false,
  loguin: false,
  contacts: false,
})

export const mutations = {
  Mhome(state) {
    state.home = true
    state.products = false
    state.about = false
    state.loguin = false
    state.contacts = false
    state.pedidos = false
  },
  Mabout(state) {
    state.home = false
    state.products = false
    state.about = true
    state.loguin = false
    state.contacts = false
    state.pedidos = false
  },
  Mproducts(state) {
    state.home = false
    state.products = true
    state.about = false
    state.loguin = false
    state.contacts = false
    state.pedidos = false
  },
  Mloguin(state) {
    state.home = false
    state.products = false
    state.about = false
    state.loguin = true
    state.contacts = false
    state.pedidos = false
  },
  Mcontacts(state) {
    state.home = false
    state.products = false
    state.about = false
    state.loguin = false
    state.contacts = true
    state.pedidos = false
  },
}

export const actions = {}
