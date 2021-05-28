export const state = () => ({
  tela: '',
  config: false,
})

export const mutations = {
  Page_on_inicio(state) {
    state.tela = 'home'
  },
  Page_on_sobre(state) {
    state.tela = 'about'
  },
  Page_on_produtos(state) {
    state.tela = 'products'
  },
  Page_on_login(state) {
    state.tela = 'login'
  },
  Page_on_contato(state) {
    state.tela = 'contacts'
  },
  Page_on_perfil(state) {
    state.tela = 'user'
  },
  Page_on_bloG(state) {
    state.tela = 'bloG'
  },
  config_on(state) {
    state.config = true
  },
  config_off(state) {
    state.config = false
  },
}

export const actions = {}
