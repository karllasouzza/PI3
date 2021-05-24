export const state = () => ({
  // Dark Mode
  Dark_mode: false,

  // Modo de cor selecionada pelo usuario
  UserMColor: false,

  /* Colors */
  // Branco
  Color_fff: '#ffffff',

  // azul claro com transparência
  Color_ffc: '#C0D9D9',

  // Verde marinho
  Color_00f: '#00FF7F',

  // Verde escuro
  Color_004: '#004b23',

  // verde ciano
  Color_007: '#007f5f',

  // Verde claro
  Color_238: '#238E23',

  // Amarelo palido
  Color_fdc: '#FDCA40',

  // Laranja vermelho
  Color_ff5: '#FA4224',

  // Vermelho
  Color_d63: '#D63230',

  // verde escuro
  Color_976: '#0A3C02',

  // Preto
  Color_000: '#000000',
})

// mutations
export const mutations = {
  Select_Color_Header(state, colorUrgent) {
    state.Header_background = colorUrgent
  },

  // Dark_mode User
  Dark_on(state) {
    state.Dark_mode = true
    state.UserMColor = true
    //
    state.Color_000 = '#ffffff'
    state.Color_fff = '#001219'
  },
  Light_on(state) {
    state.Dark_mode = false
    state.UserMColor = true
    //
    state.Color_000 = '#000000'
    state.Color_fff = '#ffffff'
  },
  // Dark_mode Auto
  Dark_on_auto(state) {
    if (!state.UserMColor) {
      state.Dark_mode = true
      //
      state.Color_000 = '#ffffff'
      state.Color_fff = '#001219'
    }
  },
  Light_on_auto(state) {
    if (!state.UserMColor) {
      state.Dark_mode = false
      //
      state.Color_000 = '#000000'
      state.Color_fff = '#ffffff'
    }
  },
}

// // actions
// export const actions = {
//   Select_colors(context, Preferencies) {
//     context.commit('Select_Color_Header', Preferencies.Header_background)
//   },
// }
