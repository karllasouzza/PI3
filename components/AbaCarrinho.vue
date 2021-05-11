<template>
  <transition name="fade">
    <div
      v-if="On_Off"
      :style="{ background: Color_fff, color: Color_000 }"
      class="Card"
    >
      <p class="close" :style="{ background: Color_238, color: Color_fff }">
        <span @click="off()"> Fechar </span>
      </p>
      <main>
        <CardsCarrinho
          v-for="Cart in Itens"
          :key="Cart.id"
          :iten="Cart.id"
          :img="Cart.img"
          :title="Cart.title"
          :preco="Cart.preco"
          :quantidade="Cart.quantidade"
        />
      </main>
      <!-- <Total :T="total" /> -->
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
    }
  },
  computed: {
    ...mapState({
      Itens: (state) => state.Cart.Itens,
      On_Off: (state) => state.Cart.On_Off,
      Color_238: (state) => state.Colors.Color_238,
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
    }),
  },

  methods: {
    ...mapMutations({
      on: 'Cart/on',
      off: 'Cart/off',
    }),
  },

  // BG() {
  //   if (this.Dark == true) {
  //     this.B = '#cc0000'
  //     this.C = 'black'
  //   } else {
  //     if (this.Dark == false) {
  //       this.B = '#fff'
  //       this.C = 'black'
  //     }
  //   }
  //   if (this.Mingles == true) {
  //     // jonson
  //     if (this.jonson1 == true) {
  //       this.i_VJ1()
  //     } else {
  //       this.totalJ1 = 0
  //     }
  //   }
}
// jonson
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

main {
  border-radius: 20px;
  display: flex;
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
    width: 99%;
    height: 75%;
    font-size: 12px;
  }
  main {
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
  .card {
    height: 150px;
    flex-direction: column;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.322);
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
