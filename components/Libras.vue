<template>
  <div class="Libras" :style="{ background: Bl }" @click="A()">
    <div :style="{ marginLeft: ml }" @click="A()">
      <span class="D" @click="A()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50.25 50.25"
          width="40"
          height="40"
        >
          <g id="Camada_1" data-name="Camada 1">
            <path
              :style="{ fill: F1 }"
              d="M10.89,17.28s-.51-.74.14-1.06c0,0,.72-.48,1.21.53,0,0,2.7,3.07,3,3.52,0,0,1.31,1,.84-.6,0,0-2.21-5.14-2.79-6.26a.57.57,0,0,1,.35-.81s.62-.39.84.16c0,0,1.86,3.77,3,5.71,0,0,1,1.45.86-.32,0,0-.45-6.68-.57-7,0,0,.74-1.74,1.77,0,0,0,1,5.55,1.26,7.47,0,0,.53,1,.85-.1A67.27,67.27,0,0,0,23,11.6s1-.93,1.48.29c0,0-.65,6.74-.32,8.48a7.42,7.42,0,0,1-2.28.78s-2,0-2.36.46c0,0-1.61,1.67-.07,2.9,0,0,.86,1.65,4.66,1,0,0-.57,1.49-3.71,5.45,0,0-2.12.57-3.17,0a3.34,3.34,0,0,1-1.61-2.79,14.23,14.23,0,0,1-.89-4.42s-.11-1-2.39-4.06C12.35,19.65,11.06,17.73,10.89,17.28Z"
              transform="translate(0.12 0.12)"
            />
            <path
              :style="{ fill: F1 }"
              d="M14,29.55s-.16-.36.3-.38c0,0,.35-.06.28.29A3.35,3.35,0,0,0,16.81,32a.23.23,0,0,1,.12.33.36.36,0,0,1-.33.2A4.28,4.28,0,0,1,14,29.55Z"
              transform="translate(0.12 0.12)"
            />
            <path
              :style="{ fill: F1 }"
              d="M12.83,30s-.16-.36.3-.37c0,0,.35-.07.28.28a3.33,3.33,0,0,0,2.25,2.49s.22.07.12.34a.36.36,0,0,1-.33.2A4.31,4.31,0,0,1,12.83,30Z"
              transform="translate(0.12 0.12)"
            />
            <path
              :style="{ fill: F1 }"
              d="M21.36,22.5s-1.52-.11-1.5.43c0,0-.19,1.1,2.14,1.11,0,0,3.06-.51,3.29.11,0,0,.84.51-.38,2.54a76.56,76.56,0,0,1-5.35,7.46s-.54.48.16,1.11.77.14,1,0c0,0,3.76-3.66,4.72-4.67,0,0,1.4-1,.81.58s-2.68,5.85-2.9,6.51a1.08,1.08,0,0,0,.45,1.1s1,.35,1.17-.32c0,0,3-5.81,3.6-6.42,0,0,.52-.71.44,0,0,0-.6,6.29-.67,6.71,0,0-.09.83.68.76,0,0,.45.3.78-.57,0,0,1-6.78,1.29-7.08,0,0,.31-1.2.84,0,0,0,.36,4.29.6,5.21a.69.69,0,0,0,.84.7s.62.06.62-1.16V30.51A16.39,16.39,0,0,1,35,27.35a12.18,12.18,0,0,0,1-3,3,3,0,0,0-.58-2.58,8.44,8.44,0,0,1-3.14-2.38s-.1-.65-2.09-.32a5.85,5.85,0,0,0-2.28.64l-2.38,1a10.22,10.22,0,0,1-1.82,1,13,13,0,0,1-1.7.53S21.6,22.58,21.36,22.5Z"
              transform="translate(0.12 0.12)"
            />
            <path
              :style="{ fill: F1 }"
              d="M37.57,25.28s0,.4-.45.17c0,0-.33-.13-.09-.39a3.33,3.33,0,0,0-.62-3.3.24.24,0,0,1,.08-.35.35.35,0,0,1,.38,0A4.28,4.28,0,0,1,37.57,25.28Z"
              transform="translate(0.12 0.12)"
            />
            <path
              :style="{ fill: F1 }"
              d="M39.14,25.07s0,.4-.44.17a.24.24,0,0,1-.1-.4A3.3,3.3,0,0,0,38,21.55a.23.23,0,0,1,.08-.35.35.35,0,0,1,.38,0A4.29,4.29,0,0,1,39.14,25.07Z"
              transform="translate(0.12 0.12)"
            />
          </g>
        </svg>
      </span>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      ml: '0%',
      Bl: '#ff9999',
      F1: '',
    }
  },
  computed: {
    ...mapState({
      Libras: (state) => state.Acessibilidade.fonte,
    }),
  },
  created() {
    if (this.Libras) {
      this.ml = '65%'
      this.Bl = '#0863f7'
      this.F1 = '#fff'
    } else {
      this.ml = '0%'
      this.Bl = '#fff'
      this.F1 = '#0863f7'
      this.b = '#0863f7'
    }
  },
  methods: {
    ...mapMutations({
      On: 'Acessibilidade/libras_on',
      Off: 'Acessibilidade/libras_off',
    }),

    A() {
      if (!this.Libras) {
        this.On()

        this.ml = '65%'
        this.Bl = '#0863f7'
        this.F1 = '#fff'
      } else {
        this.Off()
        this.ml = '0%'
        this.Bl = '#fff'
        this.F1 = '#0863f7'
      }
    },
  },
}
</script>
<style scoped>
.Libras {
  width: 120px;
  height: 42px;
  padding: 1px;
  border-radius: 20px;
  display: flex;
  transition: ease 0.7s;
  cursor: pointer;
  box-shadow: 0 0 11px 1px #0000007a;
}
.Libras div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.7s;
  cursor: pointer;
}
.Libras div span {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.7s;
  cursor: pointer;
}
.Libras div span svg {
  transition: ease 0.7s;
  cursor: pointer;
  width: 100%;
}
.Libras .D {
  transition: ease 1s;
  border-radius: 50%;
  cursor: pointer;
}
</style>
