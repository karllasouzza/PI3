<template>
  <div
    id="app"
    :as="Cores()"
    :style="{ 'font-family': fonte ? 'Arial' : 'Libras' }"
  >
    <transition name="slide-fade">
      <NotfErro
        v-if="notfErro"
        :text="notf_erro"
        :load="loadErro()"
        @click="fecharErro()"
      />
    </transition>
    <transition name="slide-fade">
      <NotfSucess
        v-if="notfSucess"
        :text="notf_sucess"
        :load="loadSucess()"
        @click="fecharSucess()"
      />
    </transition>
    <AbaCarrinho />
    <BlurCarrinho />
    <Configuracao />
    <BlurConfig />
    <ButtonMenu />
    <Header />
    <Nuxt />
    <VLibras />
    <Footer />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { VLibras } from '@vue-a11y/vlibras'
export default {
  components: {
    VLibras,
  },
  data() {
    return {
      intervaloErro: '',
      intervaloSucess: '',
    }
  },
  computed: {
    ...mapState({
      // notificaçao de erro
      notf_erro: (state) => state.Notificacoes.mensagemErro,
      notfErro: (state) => state.Notificacoes.notfErro,
      // notificaçao de sucesso
      notf_sucess: (state) => state.Notificacoes.mensagemSucess,
      notfSucess: (state) => state.Notificacoes.notfSucess,

      // Fontes
      fonte: (state) => state.Acessibilidade.fonte,
    }),
  },
  methods: {
    ...mapMutations({
      notf_erro_false: 'Notificacoes/notf_erro_false',
      notf_sucess_false: 'Notificacoes/notf_sucess_false',
      // Dark_mode
      Dark_on: 'Colors/Dark_on_auto',
      Light_on: 'Colors/Light_on_auto',
    }),
    Cores() {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        this.Dark_on()
      } else {
        this.ight_on()
      }
    },
    // setar um 'intervalo' para a notificaçao fechar
    loadErro() {
      this.intervaloErro = setInterval(this.fecharErro, 4000)
    },
    loadSucess() {
      this.intervaloSucess = setInterval(this.fecharSucess, 4000)
    },
    // fechar a notificaçao
    fecharSucess() {
      this.notf_sucess_false()
      clearInterval(this.intervaloSucess)
    },
    fecharErro() {
      this.notf_erro_false()
      clearInterval(this.intervaloErro)
    },
  },
}
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  /* -webkit-text-size-adjust: 100%; */
  /* -ms-text-size-adjust: 100%; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: Libras;
  src: url(../assets/font/libras.otf);
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  border: 0;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 30px;
}
.subtitle {
  font-weight: 300;
  font-size: 22px;
}
/* esqueletos */
.Create_loguin {
  padding: 0 1%;
  border: 2px solid;
}
/* transition  */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
