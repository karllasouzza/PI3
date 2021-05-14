<template>
  <div class="idioma" :style="{ background: Bl }">
    <div :style="{ marginLeft: ml, background: B2 }">
      <span class="D" @click="idioma_Site()">{{ Fidioma }}</span>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      Fidioma: '',
      ml: '',
      Bl: '',
      B2: '',
      language: 1,
    }
  },
  computed: {
    ...mapState({
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.ml = '0%'
      this.B2 = '#002774'
      this.Bl = 'repeating-linear-gradient(45deg, #009c3b, #ffdf00 10px)'
      this.language = 1
      this.Fidioma = 'PT'
    } else if (this.idioma === 'en') {
      this.ml = '32.5%'
      this.Bl = 'repeating-linear-gradient( #b22234, #fff 5px)'
      this.B2 = '#3c3b6e'
      this.language = 2
      this.Fidioma = 'EN'
    } else {
      this.ml = '65%'
      this.Bl = 'repeating-linear-gradient(#ffc400, #c60b1e 8px)'
      this.B2 = '#058e6e'
      this.language = 3
      this.Fidioma = 'ES'
    }
  },
  methods: {
    ...mapMutations({
      pt: 'Acessibilidade/pt',
      en: 'Acessibilidade/en',
      es: 'Acessibilidade/es',
    }),

    idioma_Site() {
      if (this.language <= 1) {
        this.ml = '32.5%'
        this.Bl = 'repeating-linear-gradient( #b22234, #fff 5px)'
        this.B2 = '#3c3b6e'
        this.en()
        this.language++
        this.Fidioma = 'EN'
      } else if (this.language === 2) {
        this.ml = '65%'
        this.Bl = 'repeating-linear-gradient(#ffc400, #c60b1e 8px)'
        this.B2 = '#058e6e'
        this.es()
        this.language++
        this.Fidioma = 'ES'
      } else if (this.language === 3) {
        this.ml = '0%'
        this.B2 = '#002774'
        this.Bl = 'repeating-linear-gradient(45deg, #009c3b, #ffdf00 10px)'
        this.pt()
        this.language = 1
        this.Fidioma = 'PT'
      }
    },
  },
}
</script>
<style scoped>
.idioma {
  width: 120px;
  height: 42px;
  padding: 1px;
  border-radius: 20px;
  display: flex;
  transition: ease 0.7s;
  cursor: pointer;
  box-shadow: 0 0 11px 1px #0000007a;
}
.idioma div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.7s;
  cursor: pointer;
}
.idioma div span {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.7s;
  cursor: pointer;
  font-weight: bold;
  color: white;
}
.idioma div span svg {
  transition: ease 0.7s;
  cursor: pointer;
  width: 100%;
}
.idioma .D {
  transition: ease 1s;
  border-radius: 50%;
  cursor: pointer;
}
</style>
