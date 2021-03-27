<template>
  <div v-if="notfSucess" class="notf" :load="load()">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="fechar()"
    >
      <g id="Iconly/Light/Close Square">
        <g id="Close Square">
          <path
            id="Stroke 1"
            d="M14.3955 9.59491L9.60352 14.3869"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 2"
            d="M14.397 14.3898L9.60095 9.59277"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.3345 2.75018H7.66549C4.64449 2.75018 2.75049 4.88918 2.75049 7.91618V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91618C21.2505 4.88918 19.3645 2.75018 16.3345 2.75018Z"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>

    <div class="text">
      <span>{{ notf_sucess }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      contador: '',
    }
  },
  computed: {
    ...mapState({
      /* Colors */
      //
      Color_000: (state) => state.Colors.Color_000,

      //
      Color_976: (state) => state.Colors.Color_976,

      //
      Color_004: (state) => state.Colors.Color_004,

      //
      Color_007: (state) => state.Colors.Color_007,

      //
      Color_00f: (state) => state.Colors.Color_00f,

      //
      Color_238: (state) => state.Colors.Color_238,

      //
      Color_fdc: (state) => state.Colors.Color_fdc,

      //
      Color_ff5: (state) => state.Colors.Color_ff5,

      //
      Color_d63: (state) => state.Colors.Color_d63,

      //
      Color_fff: (state) => state.Colors.Color_fff,

      //
      Color_ffc: (state) => state.Colors.Color_ffc,

      // notificaçao
      notf_sucess: (state) => state.Notificacoes.mensagemSucess,
      notfSucess: (state) => state.Notificacoes.notfSucess,
    }),
  },
  methods: {
    ...mapMutations({
      notf_sucess_false: 'Notificacoes/notf_sucess_false',
    }),
    load() {
      setInterval(this.fechar, 3000)
    },
    fechar() {
      this.notf_sucess_false()
    },
  },
}
</script>

<style scoped>
div.notf {
  width: 300px;
  height: 100px;
  background: green;
  font-size: 20px;
  font-weight: bold;
  position: fixed;
  bottom: 0%;
  right: 0;
  margin: 2%;
  z-index: 999;
}
</style>
