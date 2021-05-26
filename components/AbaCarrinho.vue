<template>
  <transition name="fade" :as="ON()">
    <div
      v-if="On_Off"
      :style="{ background: Color_fff, color: Color_000 }"
      class="Card"
    >
      <p class="close" :style="{ background: Color_238, color: '#fff' }">
        <span @click="off()"> {{ Fechar }} </span>
      </p>
      <transition-group class="main" name="fade">
        <CardsCarrinho
          v-for="Cart in Itens"
          :key="Cart.id"
          :iten="Cart.id"
          :img="Cart.img"
          :title="Cart.title"
          :preco="Cart.preco"
          :quantidade="Cart.quantidade"
        />
      </transition-group>
      <Total :t="total" />
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      // cores light/dark
      B: '#fff',
      C: 'black',

      // total
      total: 0,

      Fechar: '',
    }
  },
  computed: {
    ...mapState({
      Itens: (state) => state.Cart.Itens,
      On_Off: (state) => state.Cart.On_Off,
      Color_238: (state) => state.Colors.Color_238,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Dark_mode: (state) => state.Colors.Dark_mode,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.Fechar = 'Fechar'
    } else if (this.idioma === 'en') {
      this.Fechar = 'Close'
    } else {
      this.Fechar = 'Cerca'
    }
  },
  methods: {
    ...mapMutations({
      on: 'Cart/on',
      off: 'Cart/off',
    }),
    ON() {
      const A1 = this.Itens

      const A3 = []

      for (let index = 0; index < A1.length; index++) {
        A3.push(A1[index].preco * A1[index].quantidade)
      }
      if (A1.length > 0) {
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue
        this.total = A3.reduce(reducer)
      } else {
        this.total = 0
      }
    },
  },
}
// ex se for usar a quantidade x o preço
// VJ1() {
//   this.totalJ1 = parseFloat(this.jonson1V) * this.jonson1A
// },
</script>

<style scoped>
.close span {
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.close {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  padding: 0 10px;
  font-weight: bold;
}

.Card {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 999;
}

.main {
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  width: 100%;
  height: 100%;
  overflow-x: auto;
}

footer {
  width: 100%;
  height: 60px;
  position: static;
  position: initial;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
}

@media (max-width: 425px) {
  .close {
    height: 50px !important;
  }
  .Card {
    width: 100%;
    height: 100%;
    font-size: 12px;
    position: absolute;
  }
  .main {
    padding: 2px;
  }
  .Buttons {
    width: 45%;
  }
  .add-carrinho {
    width: 65% !important;
    border-radius: 0px 0px 0px 20px;
  }
  .comprar {
    width: 45%;
    border-radius: 0px 0px 20px 0px;
  }
  hr {
    margin: 2px;
  }
  footer {
    border-radius: 0;
  }
  .content {
    width: 100%;
  }
  .Buttons {
    width: 100%;
  }
  .img {
    width: 35%;
    height: 100%;
  }
}
</style>
