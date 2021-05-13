export const state = () => ({
  // idiomas
  idioma: 'en',
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
}

// // actions
// export const actions = {
//   Select_colors(context, Preferencies) {
//     context.commit('Select_Color_Header', Preferencies.Header_background)
//   },
// }
