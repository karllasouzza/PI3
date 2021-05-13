<template>
  <footer :as="R()" :style="{ color: '#fff', background: Color_238 }">
    <span> {{ LabelTotal }} = {{ total }} </span>
    <span class="finish"> {{ finish }} </span>
  </footer>
</template>
<script>
import { mapState } from 'vuex'
import currencyFormatter from 'currency-formatter'
export default {
  props: {
    t: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  data() {
    return {
      LabelTotal: '',
      finish: '',
      // total
      total: 0,
    }
  },
  computed: {
    ...mapState({
      idioma: (state) => state.Acessibilidade.idioma,
      Color_238: (state) => state.Colors.Color_238,
      Color_fff: (state) => state.Colors.Color_fff,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.finish = 'Finalizar a compra'
      this.LabelTotal = 'Total'
    } else if (this.idioma === 'en') {
      this.finish = 'Checkout'
      this.LabelTotal = 'Total'
    } else {
      this.finish = 'Verificar'
      this.LabelTotal = 'Total'
    }
  },
  methods: {
    R() {
      if (this.idioma === 'pt') {
        this.total = currencyFormatter.format(this.t, { code: 'BRL' })
      } else if (this.idioma === 'en') {
        this.total = currencyFormatter.format(this.t, { code: 'USD' })
      } else {
        this.total = currencyFormatter.format(this.t, { code: 'EUR' })
      }
    },
  },
}
</script>
<style scoped>
.finish {
  height: 100%;
  width: auto;
  padding: 0 2%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
}
svg {
  width: 40px;
}
</style>
