<template>
  <main>
    <section class="cards">
      <div class="carts">
        <CardsProdutos
          v-for="Card in computedList"
          :key="Card.id"
          :iten="Card.id"
          :img="Card.img"
          :title-img="Card.title"
          :title="Card.title"
          :preco="Card.preco"
          :autor="Card.autor"
          :comprar-color="Color_238"
          background="#fff"
          color="#000"
          :descricao="Card.descricao"
        />
      </div>
    </section>
  </main>
</template>
<script>
// import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      query: '',
      infoProdutos: [
        {
          id: '1',
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          descricao: 'Sementes de Romã',
          preco: '15,00',
          autor: 'karlla Souzza',
        },
        {
          id: '2',
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          descricao: 'Sementes de Romã',
          preco: '15,00',
          autor: 'karlla Souzza',
        },
        {
          id: '3',
          img:
            'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
          title: 'Sementes de Romã',
          descricao: 'Sementes de Romã',
          preco: '15,00',
          autor: 'karlla Souzza',
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
      Color_004: (state) => state.Colors.Color_004,
      Color_238: (state) => state.Colors.Color_238,
      Color_976: (state) => state.Colors.Color_976,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
    computedList() {
      const vm = this
      return vm.infoProdutos.filter(function (item) {
        return item.title.match(vm.query)
      })
    },
  },
  methods: {
    // ...mapMutations({
    //   Mproducts: 'Navegacao/Mproducts',
    // }),
  },
}
</script>
<style scoped>
main {
  background: #e7e7e7;
}
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
    grid-template-columns: 1fr 1fr;
  }
  .cardJ {
    max-width: 95% !important;
    min-width: 95%;
    font-size: 14px;
    min-height: 259px;
  }
}

@media (max-width: 425px) {
  .carts {
    grid-template-rows: 380px 380px 380px 380px 380px 380px 380px 380px 380px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
