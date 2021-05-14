export const state = () => ({
  // idiomas
  idioma: 'pt',
  fonte: true,
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
    state.fonte = false
  },
  libras_off(state) {
    state.fonte = true
  },
}

// // actions
// export const actions = {
//   Select_colors(context, Preferencies) {
//     context.commit('Select_Color_Header', Preferencies.Header_background)
//   },
// }
