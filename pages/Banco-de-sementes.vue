<template>
  <div class="container2">
    <div class="cards">
      <div class="categoria">
        <svg
          width="32"
          class="logo"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 16H24"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 10H29"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 22H19"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="custo" @click="small()">
          <svg
            width="20"
            title="um checkbox em formato de circulo.Animaçao."
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="custo"
              d="M21.5 13L14.1666 20L10.5 16.5"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Menor preço
        </span>
      </div>
      <div class="carts">
        <CardsProdutos
          v-for="(Card, index) in infoProdutos"
          :key="'Card' + index"
          :img="Card.img"
          :title-img="Card.img"
          :title="Card.title"
          :preco="Card.preco"
          :preco-for="Card.precoFor"
          :comprar-color="Color_976"
          :background="Color_fff"
          :color="Color_000"
          :descricao="Card.descricao"
        />
      </div>
    </div>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      custo: true,
      infoProdutos: [
        {
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          descricao: 'Sementes de Romã',
          preco: '15,00',
          precoFor: '13,00',
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          descricao: 'Sementes de Romã',
          preco: '15,00',
          precoFor: '13,00',
        },
        {
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          descricao: 'Sementes de Romã',
          preco: '15,00',
          precoFor: '13,00',
        },
      ],
    }
  },
  head: {
    meta: [
      {
        title: 'CWIA | Produtos',
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      Color_976: (state) => state.Colors.Color_976,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  methods: {
    // ...mapMutations({
    //   Mproducts: 'Navegacao/Mproducts',
    // }),
  },
}
</script>
<style scoped>
.cards {
  width: 100%;
  grid-row: 2/3;
  grid-column: 2/6;
  padding: 1%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px 50px auto auto 50px 50px;
}
@keyframes C {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}
.cardJ {
  margin: 0 auto auto auto !important;
  /* min-height: 259px; */
}
/* .I {
  grid-row: 4;
  grid-column: 1/4;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 40px;
  width: 250px;
  padding: 1%;
  border-radius: 20px;
  background: #fff159;
  font-weight: bold;
  color: #02142b;
  cursor: pointer;
}
::-webkit-input-placeholder {
  color: #011a96;
} */
/* .I input {
  width: 23px;
  font-weight: 900;
  text-align: center;
  border: none;
  background: none;
  color: #011a96;
  cursor: text;
} */
/* .Q {
  color: #da0703;
  cursor: text;
}
.P {
  width: 333px;
  height: 30px;
  display: flex;
  align-items: center;
} */
.categoria {
  position: fixed;
  top: 55px;
  width: 100%;
  height: 40px;
  left: 0;
  z-index: 2;
  display: flex;
  padding: 0 40px;
  align-items: center;
}
.logo {
  margin-right: 10px;
}
.custo {
  margin-left: 10px;
  padding: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
}
.custo svg {
  stroke-width: 2;
  width: 18px;
}
.carts {
  grid-row: 3;
  grid-column: 1/4;
  display: grid;
  grid-template-rows: 400px 400px 400px 400px 400px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  animation: C ease 2s;
}

@media (max-width: 768px) {
  .carts {
    grid-template-rows: 380px 380px 380px 380px 380px 380px 380px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .cardJ {
    max-width: 95% !important;
    min-width: 95%;
    font-size: 14px;
    min-height: 259px;
  }
  .categoria {
    padding: 0 20px;
  }
}

@media (max-width: 425px) {
  .carts {
    grid-template-rows: 380px 380px 380px 380px 380px 380px 380px 380px 380px;
    grid-template-columns: 1fr 1fr;
  }
  .cardJ {
    max-width: 90% !important;
    min-width: 90% !important;
    font-size: 14px;
    min-height: 280px;
  }
  .categoria {
    padding: 0;
  }
}
</style>
