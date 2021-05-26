<template>
  <main :as="PageOn()" :style="{ background: mainColor }">
    <section class="cards">
      <div class="Pesquisar">
        <div>
          <svg
            width="35"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8.66993C0 3.88166 3.84034 0 8.57764 0C10.8526 0 13.0343 0.913436 14.6429 2.53936C16.2516 4.16529 17.1553 6.37052 17.1553 8.66993C17.1553 13.4582 13.3149 17.3399 8.57764 17.3399C3.84034 17.3399 0 13.4582 0 8.66993ZM17.0134 15.6543L19.568 17.7164H19.6124C20.1292 18.2388 20.1292 19.0858 19.6124 19.6082C19.0955 20.1306 18.2576 20.1306 17.7407 19.6082L15.6207 17.1785C15.4203 16.9766 15.3076 16.7024 15.3076 16.4164C15.3076 16.1304 15.4203 15.8562 15.6207 15.6543C16.0072 15.2704 16.6268 15.2704 17.0134 15.6543Z"
            />
          </svg>
        </div>
        <span>{{ Pesquisar }}</span>
        <input ref="refPesquisar" v-model="query" type="text" />
      </div>
      <div class="carts">
        <CardsProdutos
          v-for="Card in computedList"
          :key="Card.product.id"
          :iten="Card.product.id"
          :img="Card.product.image"
          :title-img="Card.product.title"
          :title="Card.product.title"
          :preco="Card.product.price"
          :autor="Card.owner_user.name + Card.owner_user.last_name"
          :comprar-color="Color_238"
          :descricao="Card.product.content"
          :quantidade="Card.product.quantity"
          color="#000"
        />
      </div>
    </section>
  </main>
</template>
<script>
// import { mapMutations } from 'vuex'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      mainColor: '',
      query: '',
      Pesquisar: '',
    }
  },
  head: {
    title: 'CWIA | Produtos',
    meta: [
      {
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

      // Idiomas
      idioma: (state) => state.Acessibilidade.idioma,

      // Dark mode
      Dark_mode: (state) => state.Colors.Dark_mode,

      // Produtos
      infoProdutos: (state) => state.Produtos.Itens,
    }),
    computedList() {
      const vm = this
      return vm.infoProdutos.filter(function (item) {
        return item.title.match(vm.query)
      })
    },
  },
  created() {
    if (this.idioma === 'pt') {
      this.Pesquisar = 'Pesquisar'
    } else if (this.idioma === 'en') {
      this.Pesquisar = 'Search'
    } else {
      this.Pesquisar = 'Buscar'
    }
    if (this.Dark_mode) {
      this.mainColor = '#001219'
    } else {
      this.mainColor = '#e7e7e7'
    }
  },
  methods: {
    ...mapMutations({
      Mproducts: 'Header/Page_on_produtos',
      PageOn: 'Header/Page_on_produtos',
    }),
  },
}
</script>
<style scoped>
.cards {
  width: 100%;
  grid-row: 2/3;
  grid-column: 2/6;
  padding: 10px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 60px 50px 50px auto auto 50px 50px;
}

.Pesquisar {
  grid-row: 2/3;
  grid-column: 1/2;
  width: 128px;
  padding: 0 5px;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 83px;
  background: #238e23;
  border-radius: 20px;
  transition: 0.3s ease-out;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
}
.Pesquisar:hover {
  width: 385px;
  grid-template-columns: 1fr 1fr;
  background: #fff;
}
.Pesquisar > span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}
.Pesquisar:hover > span {
  display: none;
}
.Pesquisar div {
  margin: auto;
}
.Pesquisar > div svg {
  fill: #fff;
  transition: 0.3s ease-out;
}
.Pesquisar:hover > div svg {
  fill: #238e23;
}
.Pesquisar:hover > input {
  display: inline-block;
  margin: auto;
  margin-right: 14px;
}
@keyframes C {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.Pesquisar > input:focus {
  outline: none;
}
.Pesquisar > input {
  transition: 0.1s ease-out;
  animation: C ease 2s;
  display: none;
  width: 306px;
  height: 70%;
  border-bottom: 1px solid #238e23;
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
  grid-row: 4;
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

  .Pesquisar {
    grid-column: 1/4;
    margin-left: 10px;
  }
  .Pesquisar:hover {
    width: 95%;
  }
  .Pesquisar > input {
    width: 266px;
  }
  .cards {
    grid-template-rows: 80px 50px 20px auto auto 50px 50px;
    padding: 1px 0px;
  }
}
@media (max-width: 320px) {
  .Pesquisar > input {
    width: 240px;
  }
}
</style>
