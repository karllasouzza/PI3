export const state = () => ({
  home: true,
  products: false,
  about: false,
  loguin: false,
  contacts: false,
})

export const mutations = {
  Page_on_inicio(state) {
    state.home = true
    state.products = false
    state.about = false
    state.loguin = false
    state.contacts = false
    state.perfil = false
  },
  Page_on_sobre(state) {
    state.home = false
    state.products = false
    state.about = true
    state.loguin = false
    state.contacts = false
    state.perfil = false
  },
  Page_on_produtos(state) {
    state.home = false
    state.products = true
    state.about = false
    state.loguin = false
    state.contacts = false
    state.perfil = false
  },
  Mloguin(state) {
    state.home = false
    state.products = false
    state.about = false
    state.loguin = true
    state.contacts = false
    state.perfil = false
  },
  Page_on_contato(state) {
    state.home = false
    state.products = false
    state.about = false
    state.loguin = false
    state.contacts = true
    state.perfil = false
  },
  Page_on_perfil(state) {
    state.home = false
    state.products = false
    state.about = false
    state.loguin = false
    state.contacts = true
    state.perfil = false
  },
}

export const actions = {}
