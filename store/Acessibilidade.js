export const state = () => ({
  // idiomas
  idioma: 'pt',
  fonte: false,

  text: 16,
})

// mutations
export const mutations = {
  pt(state) {
    state.idioma = 'pt'
  },
  en(state) {
    state.idioma = 'en'
  },
  es(state) {
    state.idioma = 'es'
  },
  libras_on(state) {
    state.fonte = true
  },
  libras_off(state) {
    state.fonte = false
  },
  fontMais(state) {
    state.text++
  },
  fontMenos(state) {
    state.text--
  },
}

// // actions
// export const actions = {
//   Select_colors(context, Preferencies) {
//     context.commit('Select_Color_Header', Preferencies.Header_background)
//   },
// }
