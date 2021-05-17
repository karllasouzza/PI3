<template>
  <div :style="{ background: Color_fff }" @click="copiarText(text)">
    <span :style="{ color: Color_000 }">{{ label }}</span>
    <span :style="{ color: Color_000 }">{{ text }}</span>
    <span class="icons">
      <transition name="slide-fade">
        <span v-if="copiar" :style="{ color: Color_000 }" class="freedBack">{{
          L_copiar
        }}</span>
      </transition>
      <!--  icons -->
      <transition v-if="!copiar" name="bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          :fill="Color_000"
          class="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
          />
          <path
            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
          />
        </svg>
      </transition>
      <transition v-else name="bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          :fill="Color_000"
          class="bi bi-clipboard-check"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
          />
          <path
            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
          />
        </svg>
      </transition>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    label: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      copiar: false,
      interval: '',
      L_copiar: '',
    }
  },
  computed: {
    ...mapState({
      /* Colors */
      Color_000: (state) => state.Colors.Color_000,
      Color_976: (state) => state.Colors.Color_976,
      Color_004: (state) => state.Colors.Color_004,
      Color_007: (state) => state.Colors.Color_007,
      Color_00f: (state) => state.Colors.Color_00f,
      Color_238: (state) => state.Colors.Color_238,
      Color_fdc: (state) => state.Colors.Color_fdc,
      Color_ff5: (state) => state.Colors.Color_ff5,
      Color_d63: (state) => state.Colors.Color_d63,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_ffc: (state) => state.Colors.Color_ffc,
      // Idioma
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.L_copiar = 'Copiado...'
    } else if (this.idioma === 'en') {
      this.L_copiar = 'Copied...'
    } else {
      this.L_copiar = 'Copiado...'
    }
  },
  methods: {
    copiarText(valor) {
      navigator.clipboard.writeText(valor)
      this.copiar = true
      this.interval = setInterval(this.seconds, 2500)
    },
    seconds() {
      clearInterval(this.interval)
      this.copiar = false
    },
  },
}
</script>

<style scoped>
span.icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
div:hover {
  background: #238e23eb !important;
}
div > span:first-child {
  font-weight: bold;
}

div > span > svg {
  width: 20px;
  height: 20px;
}
.freedBack {
  font-size: 14px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
