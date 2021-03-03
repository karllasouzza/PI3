export const state = () => ({
  Corlor_Detalhes: '#00FF7F',
  Destaque_color: '#FF5714',

  //   Header
  HeaderBackground: '#215E21',

  // footer
  Footer_Background: '#215E21',
  Footer_Text_Color: '#fff',
  Creators_background: '#976947',
})

// mutations
export const mutations = {
  Select_Color_Header(state, colorUrgent) {
    state.Header_background = colorUrgent
  },
}

// actions
export const actions = {
  Select_colors(context, Preferencies) {
    context.commit('Select_Color_Header', Preferencies.Header_background)
  },
}
