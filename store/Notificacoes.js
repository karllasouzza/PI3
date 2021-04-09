export const state = () => ({
  mensagemErro: '',
  mensagemSucess: '',
  notfErro: false,
  notfSucess: false,
})

// mutations
export const mutations = {
  SET_Erro(state, mensagemErro) {
    state.mensagemErro = mensagemErro
  },
  SET_Sucess(state, mensagemSucess) {
    state.mensagemSucess = mensagemSucess
  },
  notf_erro_true(state) {
    state.notfErro = true
    state.notfSucess = false
    state.mensagemSucess = ''
  },
  notf_erro_false(state) {
    state.notfErro = false
    state.mensagemErro = ''
  },
  notf_sucess_false(state) {
    state.notfSucess = false
    state.mensagemSucess = ''
  },
  notf_sucess_true(state) {
    state.notfSucess = true
    state.notfErro = false
    state.mensagemErro = ''
  },
}

// actions
export const actions = {
  setErro(context, Notificacoes) {
    context.commit('SET_Erro', Notificacoes.mensagemErro)
  },
  setSucess(context, Notificacoes) {
    context.commit('SET_Sucess', Notificacoes.mensagemSucess)
  },
}
