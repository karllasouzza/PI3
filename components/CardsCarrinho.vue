<template>
  <div class="card" :style="{ background: Color_fff }">
    <div class="content" :style="{ background: Color_238 }">
      <span :style="{ 'background-image': 'url(' + img + ')' }" class="img">
      </span>
      <span class="conteudo" :style="{ color: Color_fff }">
        <p class="titulo">
          {{ title }}
        </p>
        <p class="preco">R${{ preco }}</p>
      </span>
    </div>

    <!-- Botoes -->
    <div class="Buttons">
      <span
        class="comprar"
        :style="{ background: Color_ff5, color: Color_fff }"
        title="Comprar"
        @click="deletar()"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    iten: {
      type: Number,
      require: true,
      default: 0,
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
      type: String,
      require: true,
      default: '',
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
    quantidade: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      Color_ff5: (state) => state.Colors.Color_ff5,
    }),
  },
  methods: {
    ...mapActions({
      delet: 'Cart/delet',
    }),

    deletar() {
      this.delet({
        id: {
          id: this.iten,
        },
      })
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: 20px;
  width: 100%;
  height: 80px;
  box-shadow: 0 0px 3px 2px rgba(0, 0, 0, 0.205);
  display: flex;
  flex-direction: row;
  transition: ease 0.7s;
  padding: 2px;
  align-items: center;
  margin: 1% 0 !important;
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  text-decoration: none;
  align-items: center;
}
.Buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75px;
  height: 100%;
  padding: 1px;
}
.img {
  width: 24%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
  background-size: cover;
}

.conteudo {
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
svg {
  width: 80px;
  height: 80px;
}
.precoJ {
  display: flex;
  padding: 5px;
  height: auto;
  width: 30%;
  align-items: center;
  justify-content: center;
  cursor: text;
}
.tituloJ {
  padding: 3%;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.descricaoJ {
  height: 70%;
  font-size: 15px;
  padding: 1px;
  display: none;
  margin: 4% 0;
}
.comprar {
  border-radius: 20px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px;
  width: 40px;
}
.add-carrinho {
  border-radius: 20px;
  height: 100%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30%;
  background: #fff159;
}
</style>
