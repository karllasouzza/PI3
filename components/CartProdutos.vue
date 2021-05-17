<template>
  <div v-if="prod === 0" class="add-carrinho">
    <span class="Adicionar" @click="adicionar()">
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
      delet: 'Cart/delet',
    }),

    adicionar() {
      this.prod++
      this.add({
        Itens: {
          id: parseInt(this.iten),
          quantidade: parseInt(this.prod),
          img: this.img,
          title: this.title,
          descricao: this.descricao,
          preco: this.preco,
          autor: this.autor,
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
