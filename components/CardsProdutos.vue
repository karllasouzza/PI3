<template>
  <div class="card p1" :style="{ color: color }">
    <!-- 0000 -->
    <span v-if="img === '0000'" class="img banana" />
    <!-- 0001 -->
    <span v-if="img === '0001'" class="img ameixa" />
    <!-- 0002 -->
    <span v-if="img === '0002'" class="img damasco" />
    <!-- 0003 -->
    <span v-if="img === '0003'" class="img morango" />
    <span class="conteudo" :style="{ background: '#fff', color: '#000000' }">
      <p class="titulo">{{ title }}</p>
      <p class="preco">{{ total }}</p>
      <span class="descricao S1">{{ descricao }}</span>
      <p class="autor">{{ Label_Autor }}{{ autor }}</p>
    </span>
    <CartProdutos
      :key="iten"
      :iten="iten"
      :img="img"
      :title="title"
      :preco="preco"
      :autor="autor"
      :descricao="descricao"
      :prod="quantidade"
    />
    <span
      class="comprar btn-hover color-1"
      :style="{ color: '#fff' }"
      @click="Comprar()"
    >
      {{ Label_Comprar }}
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import currencyFormatter from 'currency-formatter'

export default {
  props: {
    iten: {
      type: Number,
      require: true,
      default: 0,
    },
    titleImg: {
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
    quantidade: {
      type: Number,
      require: true,
      default: 0,
    },
    // cores
    color: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      Label_Preco: 'Preço: ',
      Label_Comprar: 'Comprar',
      Label_Autor: 'Por ',
      total: '',

      // Dinheiros
      Dolar: 3.44,
      Euro: 3.7,
    }
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    if (this.idioma === 'pt') {
      this.total = currencyFormatter.format(this.preco, { code: 'BRL' })
      return this.total
    } else if (this.idioma === 'en') {
      const valor = (this.preco / this.Dolar).toFixed(2)
      this.total = currencyFormatter.format(valor, { code: 'USD' })
      return this.total
    } else {
      const valor = (this.preco / this.Euro).toFixed(2)
      this.total = currencyFormatter.format(valor, { code: 'EUR' })
      return this.total
    }
  },
  methods: {
    ...mapMutations({}),
    Comprar() {},
  },
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  max-width: 216px;
  min-width: 216px;
  height: 275px;
  padding: 2px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: ease 0.1s;
  box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.205);
  background: white;
}
.p1:hover {
  height: 375px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
}
.p1:hover > span .S1 {
  transition: 0.1s ease-out;
  display: flex;
  height: auto;
  justify-content: flex-start;
  animation: C ease 1s;
}
.p1:hover > .conteudo {
  transition: 0.1s ease-out;
  height: 98px;
  margin-top: 15px;
}
.p1:hover > .comprar {
  display: flex;
  transition: 0.1s ease-out;
  animation: C ease 2s;
}
.S1 {
  display: none;
}

.img {
  width: 100%;
  height: 170px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
  background-size: cover;
}
.banana {
  background-image: url(assets/img/produtos/banana.jpg);
}
.ameixa {
  background-image: url(assets/img/produtos/ameixa.jpg);
}
.damasco {
  background-image: url(assets/img/produtos/damasco.jpg);
}
.morango {
  background-image: url(assets/img/produtos/morango.jpg);
}

.conteudo {
  padding: 0 5px;
  margin: 2% 0;
  width: 100%;
  height: 80px;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
p.autor {
  color: #8c8c8c;
  font-size: 12px;
  line-height: 1;
  margin: 2px 0 0;
  position: unset;
}
.preco {
  display: flex;
  align-self: flex-end;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  cursor: text;
  font-weight: bold;
  color: #238e23;
}
.titulo {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
}
.descricao {
  font-size: 15px;
}
.p1:hover > .add-carrinho {
  display: flex;
  transition: 0.1s ease-out;
  animation: C ease 2s;
}
.comprar {
  display: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 35px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: flex-end;
  width: 100%;
  color: white;
}
@keyframes C {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 425px) {
  .card {
    max-width: 90% !important;
    min-width: 90% !important;
    font-size: 14px;
    min-height: 280px;
  }
}
</style>
