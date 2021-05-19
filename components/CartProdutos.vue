<template>
  <div class="add-carrinho">
    <span v-if="prod === 0" class="Adicionar" @click="adicionar()">
      <span class="text">{{ Toadd }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-bag-plus"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
        />
        <path
          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
        />
      </svg>
    </span>
    <span v-if="prod > 0" class="mais" @click="somar()">+</span>
    <span v-if="prod > 0" class="contador">
      {{ prod }}
    </span>
    <span v-if="prod > 1" class="menos" @click="subitrair()">-</span>
    <span v-if="prod === 1" class="menos" @click="deletar()">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
          fill="#D63230"
        /></svg
    ></span>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    iten: {
      type: String,
      require: true,
      default: '',
    },

    img: {
      type: String,
      require: true,
      default: '',
    },
    title: {
      type: String,
      require: true,
      default: '',
    },
    preco: {
      type: Number,
      require: true,
      default: 0,
    },
    descricao: {
      type: String,
      require: true,
      default: '',
    },
    autor: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      prod: 0,
      Toadd: '',
    }
  },
  computed: {
    ...mapState({
      Language: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.Language === 'pt') {
      this.Toadd = 'Adicionar ao carrinho'
    } else if (this.Language === 'en') {
      this.Toadd = 'Add to cart'
    } else {
      this.Toadd = 'Añadir al carro'
    }
  },
  methods: {
    ...mapActions({
      add: 'Cart/add',
      Sub: 'Cart/Sub',
      Soma: 'Cart/Soma',
      delet: 'Cart/delet',
    }),

    adicionar() {
      this.prod++
      this.add({
        Itens: {
          id: parseInt(this.iten),
          quantidade: parseInt(1),
          img: this.img,
          title: this.title,
          descricao: this.descricao,
          preco: this.preco,
          autor: this.autor,
        },
      })
    },
    //  Somar Itens
    somar() {
      this.prod++
      this.Soma({
        Itens: {
          id: parseInt(this.iten),
        },
      })
    },

    // Subitrair Itens
    subitrair() {
      this.prod--
      this.Sub({
        Itens: {
          id: parseInt(this.iten),
        },
      })
    },

    // remover
    deletar() {
      this.prod = 0
      this.delet({
        id: this.iten,
        contador: this.prod,
      })
    },
  },
}
</script>
<style scoped>
.add-carrinho {
  display: none;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 35px;
  width: 100%;
  background: #fff159;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 1%;
  transition: ease-in-out 0.7s;
}
.Adicionar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.7s;
  background: #fff159;
  color: #000;
}
.Adicionar > span.text {
  margin-right: 10px;
}
.Adicionar > svg {
  width: 18px;
  height: 18px;
}
.Adicionar:hover {
  color: #fff159;
  background: #000;
}
.add-carrinho .mais {
  width: 33%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-carrinho .contador {
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-carrinho .menos {
  width: 33%;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
