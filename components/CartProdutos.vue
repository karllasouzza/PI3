<template>
  <div v-if="prod === 0" class="add-carrinho">
    <span class="Adicionar" @click="adicionar()">
      <span>Add</span>
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
    }
  },
  computed: {
    ...mapState({
      Language: (state) => state.Acessibilidade.idioma,
    }),
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
  font-weight: bold;
  color: #02142b;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 1%;
}
.Adicionar {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
