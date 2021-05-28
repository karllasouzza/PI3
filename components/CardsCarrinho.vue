<template>
  <div
    class="card"
    :style="{
      background: '#fff',
      'box-shadow': '0 0px 3px 2px' + Color_000 + '0.205',
    }"
  >
    <div class="content" :style="{ background: Color_238 }">
      <!-- 0000 -->
      <span v-if="img === '0000'" class="img banana" />
      <!-- 0001 -->
      <span v-if="img === '0001'" class="img ameixa" />
      <!-- 0002 -->
      <span v-if="img === '0002'" class="img damasco" />
      <!-- 0003 -->
      <span v-if="img === '0003'" class="img morango" />

      <span class="conteudo" :style="{ color: '#fff' }">
        <p class="titulo">
          {{ title }}
        </p>
        <p class="preco">{{ total }}</p>
      </span>
    </div>

    <!-- Botoes -->
    <div class="Buttons">
      <CartCarrinho
        :key="iten"
        :iten="iten"
        :img="img"
        :title="title"
        :preco="preco"
        :autor="autor"
        :descricao="descricao"
        :prod="quantidade"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import currencyFormatter from 'currency-formatter'
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
  },
  data() {
    return {
      total: 0,
    }
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      Color_ff5: (state) => state.Colors.Color_ff5,
      idioma: (state) => state.Acessibilidade.idioma,
    }),
  },
  created() {
    this.total = this.preco
    if (this.idioma === 'pt') {
      this.total = currencyFormatter.format(this.total, { code: 'BRL' })
      return this.total
    } else if (this.idioma === 'en') {
      this.total = currencyFormatter.format(this.total, { code: 'USD' })
      return this.total
    } else {
      this.total = currencyFormatter.format(this.total, { code: 'EUR' })
      return this.total
    }
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
  min-width: 98%;
  min-height: 150px;
  flex-direction: column;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.322);
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: ease 0.7s;
  padding: 2px;
  margin: 1% 0;
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  text-decoration: none;
  align-items: center;
}
.Buttons {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1px;
}
.img {
  width: 24%;
  height: 100%;
  border-radius: 20px 0 0 0;
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
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px;
  width: 30%;
  border-radius: 0 20px 20px 0;
}
.comprar svg {
  width: 24px;
  height: 24px;
}
</style>
